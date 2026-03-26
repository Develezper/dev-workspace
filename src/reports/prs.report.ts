import type { PullRequest } from "../domain/types";
import { encabezado, prefijoEstadoPR, separador } from "../utils/format";

export function reportePullRequests(lista: PullRequest[]): void {
  encabezado("Estos son los pull requests del proyecto:");

  lista.forEach((pr) => {
    const destacado = prefijoEstadoPR(pr.estado);

    console.log(`${destacado}Titulo: ${pr.titulo}`);
    console.log(`Estado: ${pr.estado}`);
    console.log(`Autor: ${pr.autor.nombre}`);
    console.log(`Numero de reviewers: ${pr.reviewers.length}`);
    separador();
  });
}
