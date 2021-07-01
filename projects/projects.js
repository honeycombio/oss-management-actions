'use strict';

function createRequest(eventName, payload) {
	return eventName === 'issues' ? {
		column_id: 14962835, // To Triage column
		content_id: payload.issue.id,
		content_type: 'Issue'
	} : {
		column_id: 14962835, // To Triage column
		content_id: payload.pull_request.id,
		content_type: 'PullRequest'
	}
}

module.exports.createRequest = createRequest;
