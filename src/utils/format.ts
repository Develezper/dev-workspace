import type { EstadoPullRequest } from "../domain/types";

export function encabezado(texto: string): void {
  console.log(texto);
}

export function separador(): void {
  console.log("---");
}

export function prefijoEstadoPR(estado: EstadoPullRequest): string {
  if (estado === "aprobado") return "[APROBADO] ";
  if (estado === "mergeado") return "[MERGEADO] ";
  return "";
}
