import type {
  Developer,
  Issue,
  Project,
  ProjectTeam,
  PullRequest,
  Repository,
} from "../domain/types";

const ana: Developer = {
  name: "Ana Torres",
  role: "backend",
  seniority: "senior",
  technologies: ["Node.js", "TypeScript", "PostgreSQL"],
  availability: true,
  active: true,
};

const luis: Developer = {
  name: "Luis Rojas",
  role: "frontend",
  seniority: "mid",
  technologies: ["React", "TypeScript", "CSS"],
  availability: true,
  active: true,
};

const marta: Developer = {
  name: "Marta Gil",
  role: "devops",
  seniority: "senior",
  technologies: ["Docker", "GitHub Actions", "AWS"],
  availability: false,
  active: false,
};

const diego: Developer = {
  name: "Diego Pena",
  role: "fullstack",
  seniority: "junior",
  technologies: ["TypeScript", "Node.js", "Vue"],
  availability: true,
  active: true,
};

export const developers: ProjectTeam = [ana, luis, marta, diego];

export const repository: Repository = {
  name: "technical-management-platform",
  url: "https://github.com/company/technical-management-platform",
  mainBranch: "main",
  primaryLanguage: "TypeScript",
};

export const issues: Issue[] = [
  { id: 1, title: "Error while creating pull request", type: "bug", priority: "high", status: "open", assignedTo: ana },
  { id: 2, title: "Improve issue filters", type: "improvement", priority: "medium", status: "in progress", assignedTo: luis },
  { id: 3, title: "CI pipeline timeout", type: "bug", priority: "critical", status: "open", assignedTo: null },
  { id: 4, title: "Add priority tags", type: "improvement", priority: "low", status: "resolved", assignedTo: diego },
  { id: 5, title: "Validate duplicated reviewers", type: "bug", priority: "medium", status: "closed", assignedTo: ana },
];

export const pullRequests: PullRequest[] = [
  { id: 101, title: "feat: issues module", status: "open", author: diego, reviewers: [ana, luis], linesOfCode: 420 },
  { id: 102, title: "fix: pull request status handling", status: "approved", author: ana, reviewers: [luis], linesOfCode: 180 },
  { id: 103, title: "refactor: deployment pipeline", status: "rejected", author: marta, reviewers: [ana, diego], linesOfCode: 510 },
  { id: 104, title: "chore: clean up types", status: "merged", author: luis, reviewers: [ana], linesOfCode: 95 },
];

export const project: Project = {
  name: "Internal Technical Management",
  repository,
  issues,
  pullRequests,
  team: developers,
};
