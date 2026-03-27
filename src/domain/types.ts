export type DeveloperRole = "backend" | "frontend" | "fullstack" | "devops" | "mobile" | "qa";
export type Seniority = "junior" | "mid" | "senior" | "lead";
export type PullRequestStatus = "open" | "approved" | "rejected" | "merged";
export type IssueType = "bug" | "improvement";
export type IssuePriority = "low" | "medium" | "high" | "critical";
export type IssueStatus = "open" | "in progress" | "resolved" | "closed";

export type Developer = {
  name: string;
  role: DeveloperRole;
  seniority: Seniority;
  technologies: string[];
  availability: boolean;
  active: boolean;
};

export type Repository = {
  name: string;
  url: string;
  mainBranch: string;
  primaryLanguage: string;
};

export interface PullRequest {
  id: number;
  title: string;
  status: PullRequestStatus;
  author: Developer;
  reviewers: Developer[];
  linesOfCode: number;
}

export interface Issue {
  id: number;
  title: string;
  type: IssueType;
  priority: IssuePriority;
  status: IssueStatus;
  assignedTo: Developer | null;
}

export type ProjectTeam = [Developer, Developer, Developer, Developer];

export type Project = {
  name: string;
  repository: Repository;
  issues: Issue[];
  pullRequests: PullRequest[];
  team: ProjectTeam;
};
