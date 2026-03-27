import type { Issue, IssueStatus } from "../domain/types";
import { heading, separator } from "../utils/format";

export function issuesReport(list: Issue[]): void {
  heading("Issues:");

  const byStatus: Record<IssueStatus, number> = {
    open: 0,
    "in progress": 0,
    resolved: 0,
    closed: 0,
  };

  let bugs = 0;
  let improvements = 0;

  list.forEach((issue) => {
    byStatus[issue.status] += 1;
    if (issue.type === "bug") bugs += 1;
    if (issue.type === "improvement") improvements += 1;
  });

  console.log("Issues by status:");
  console.log(byStatus);
  console.log(`Bugs: ${bugs}`);
  console.log(`Improvements: ${improvements}`);
  separator();
}
