import type { PullRequestStatus } from "../domain/types";

export function heading(text: string): void {
  console.log(text);
}

export function separator(): void {
  console.log("---");
}

export function pullRequestStatusPrefix(status: PullRequestStatus): string {
  if (status === "approved") return "[APPROVED] ";
  if (status === "merged") return "[MERGED] ";
  return "";
}
