import { project } from "./data/seed";
import { alertsReport } from "./reports/alerts.report";
import { issuesReport } from "./reports/issues.report";
import { pullRequestsReport } from "./reports/prs.report";
import { teamReport } from "./reports/team.report";

teamReport(project.team);
pullRequestsReport(project.pullRequests);
issuesReport(project.issues);
alertsReport(project);
