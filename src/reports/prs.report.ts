import type { PullRequest } from "../domain/types";
import { heading, pullRequestStatusPrefix, separator } from "../utils/format";

export function pullRequestsReport(list: PullRequest[]): void {
  heading("Pull requests:");

  list.forEach((pr) => {
    const highlight = pullRequestStatusPrefix(pr.status);

    console.log(`${highlight}Title: ${pr.title}`);
    console.log(`Status: ${pr.status}`);
    console.log(`Author: ${pr.author.name}`);
    console.log(`Number of reviewers: ${pr.reviewers.length}`);
    separator();
  });
}
