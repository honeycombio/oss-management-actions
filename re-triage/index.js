'use strict';

const core = require('@actions/core');
const github = require('@actions/github');

void async function () {
	try {
		const iceboxColumn = 12117642;
		const triageColumn = 14962835;
		const issueUrl = github.context.payload.issue.url;
		const accessToken = core.getInput('ghprojects-token');
		const octokit = github.getOctokit(accessToken);
		let page = 1;
		let issueCard;
		while (!issueCard) {
			let response = await octokit.rest.projects.listCards({
				column_id: iceboxColumn,
				archived_state: "not_archived",
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
