var JiraApiWithXray = require('jira-client-xray');
var testExecResults = require('../support/test/report/cucumber_report.json');

// Initialize
var jira = new JiraApiWithXray({
    strictSSL: true,
    protocol: 'https',
    username: 'mateusperdigao@gmail.com',
    password: '1fPYbxOa3OsT9wG6TOOvD148',
    host: 'mateuspd.atlassian.net',
    xrayVersion: '1.0'
});

jira
    .importExecResultsFromCucumber(testExecResults)
    .then(function (testExecIssueId) {

    });