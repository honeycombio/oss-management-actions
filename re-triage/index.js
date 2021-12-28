'use strict';

const core = require('@actions/core');
const github = require('@actions/github');

void async function () {
	try {
		const iceboxColumn = 12117642;
		const triageColumn = 14962835;
		const doneColumn = 12315669;
		const issueUrl = github.context.payload.issue.url;
		const issueOpen = github.context.payload.issue.state === "open";
		const closedAt = github.context.payload.issue.closed_at;

		// don't re-triage closing comments
		if (!issueOpen) {
			let now = new Date();
			let closedTime = new Date(closedAt);
			let closedMinutesAgo = (now - closedTime) / 60000;
			if (closedMinutesAgo < 10) {
				console.log('likely a closing comment, bailing');
				return;
			}
		}

		const accessToken = core.getInput('ghprojects-token');
		const octokit = github.getOctokit(accessToken);
		let page = 1;
		let issueCard;
		while (!issueCard) {
			let response = await octokit.rest.projects.listCards({
				column_id: issueOpen ? iceboxColumn : doneColumn,
				archived_state: issueOpen ? "not_archived" : "all",
				per_page: 100,
				page: page
			});
			if (response.status !== 200) {
				core.setFailed("unable to query cards, bailing")
				break;
			}
			let cards = response.data;
			if (cards.length == 0) {
				break;
			}
			let matches = cards.filter(card => card.content_url === issueUrl);
			if (matches.length > 0) {
				issueCard = matches[0];
			} else {
				page++;
			}
		}

		if (issueCard) {
			// archived cards need to be un-archived first
			if (!issueOpen) {
				await octokit.rest.projects.updateCard({
					card_id: issueCard.id,
					archived: false
				});
			}
			await octokit.rest.projects.moveCard({
				card_id: issueCard.id,
				column_id: triageColumn,
				position: "bottom"
			});
		}
	} catch (error) {
		core.setFailed(error.message);
	}
}();
