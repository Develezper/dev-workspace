import type { Developer } from "../domain/types";
import { heading, separator } from "../utils/format";

export function teamReport(list: Developer[]): void {
  heading("Team members:");

  list.forEach((developer) => {
    const activeStatus = developer.active ? "Active" : "Inactive";
    console.log(`Name: ${developer.name}`);
    console.log(`Role: ${developer.role}`);
    console.log(`Seniority: ${developer.seniority}`);
    console.log(`Number of technologies: ${developer.technologies.length}`);
    console.log(`Status: ${activeStatus}`);
    separator();
  });
}
