import type { Project } from "../domain/types";
import { heading, separator } from "../utils/format";

export function alertsReport(project: Project): void {
  heading("Project alerts:");

  const pullRequestLinesLimit = 400;
  const assignmentsLimit = 2;

  const largeOpenPRs = project.pullRequests.filter(
    (pr) => pr.status === "open" && pr.linesOfCode > pullRequestLinesLimit,
  );

  const unassignedCriticalIssues = project.issues.filter(
    (issue) => issue.priority === "critical" && issue.assignedTo === null,
  );

  const assignmentsByDeveloper: Record<string, number> = {};
  project.team.forEach((developer) => {
    assignmentsByDeveloper[developer.name] = 0;
  });

  project.issues.forEach((issue) => {
    if (issue.assignedTo) {
      const current = assignmentsByDeveloper[issue.assignedTo.name] ?? 0;
      assignmentsByDeveloper[issue.assignedTo.name] = current + 1;
    }
  });

  console.log("Open pull requests with too many lines:");
  largeOpenPRs.forEach((pr) => console.log(`- ${pr.title} (${pr.linesOfCode} lines)`));

  console.log("Critical issues without assignee:");
  unassignedCriticalIssues.forEach((issue) => console.log(`- ${issue.title}`));

  console.log("Developers with too many assignments:");
  Object.entries(assignmentsByDeveloper).forEach(([name, count]) => {
    if (count > assignmentsLimit) {
      console.log(`- ${name}: ${count} assignments`);
    }
  });

  separator();
}
