import type { EstadoIssue, Issue } from "../domain/types";
import { encabezado, separador } from "../utils/format";

export function reporteIssues(lista: Issue[]): void {
  encabezado("Estos son los issues que tuvimos en el proyecto:");

  const porEstado: Record<EstadoIssue, number> = {
    abierto: 0,
    "en progreso": 0,
    resuelto: 0,
    cerrado: 0,
  };

  let bugs = 0;
  let mejoras = 0;

  lista.forEach((issue) => {
    porEstado[issue.estado] += 1;
    if (issue.tipo === "bug") bugs += 1;
    if (issue.tipo === "mejora") mejoras += 1;
  });

  console.log("Issues por estado:");
  console.log(porEstado);
  console.log(`Bugs: ${bugs}`);
  console.log(`Mejoras: ${mejoras}`);
  separador();
}
