var reporter = require('cucumber-html-reporter');
var BehavePro = require('behavepro');

var options = {
    theme: 'bootstrap',
    jsonFile: 'test/features/support/report/cucumber_report.json',
    output: 'test/features/support/test/report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: false,
    metadata: {
        "App Version": "0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome  54.0.2840.98",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};

reporter.generate(options);

BehavePro({
    "host": "https://mateuspd.atlassian.net",
    "id": 10000,
    "userId": "5c0e577553cd043c8c6148a3",
    "apiKey": "1fPYbxOa3OsT9wG6TOOvD148"
}, function () {
    // done
});