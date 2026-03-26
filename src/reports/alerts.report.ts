import type { Proyecto } from "../domain/types";
import { encabezado, separador } from "../utils/format";

export function reporteAlertas(proyectoActual: Proyecto): void {
  encabezado("Estas son las alertas del proyecto:");

  const limiteLineasPR = 400;
  const limiteAsignaciones = 2;

  const prsGrandes = proyectoActual.listaDePullRequests.filter(
    (pr) => pr.estado === "abierto" && pr.lineasDeCodigo > limiteLineasPR,
  );

  const issuesCriticosSinAsignar = proyectoActual.listaDeIssues.filter(
    (issue) => issue.prioridad === "critica" && issue.asignadoA === null,
  );

  const asignacionesPorDev: Record<string, number> = {};
  proyectoActual.equipoDeDesarrolladores.forEach((dev) => {
    asignacionesPorDev[dev.nombre] = 0;
  });

  proyectoActual.listaDeIssues.forEach((issue) => {
    if (issue.asignadoA) {
      const actual = asignacionesPorDev[issue.asignadoA.nombre] ?? 0;
      asignacionesPorDev[issue.asignadoA.nombre] = actual + 1;
    }
  });

  console.log("Alertas PR abiertos con demasiadas lineas:");
  prsGrandes.forEach((pr) => console.log(`- ${pr.titulo} (${pr.lineasDeCodigo} lineas)`));

  console.log("Alertas issues criticos sin asignar:");
  issuesCriticosSinAsignar.forEach((issue) => console.log(`- ${issue.titulo}`));

  console.log("Alertas desarrolladores con demasiadas asignaciones:");
  Object.entries(asignacionesPorDev).forEach(([nombre, cantidad]) => {
    if (cantidad > limiteAsignaciones) {
      console.log(`- ${nombre}: ${cantidad} asignaciones`);
    }
  });

  separador();
}
