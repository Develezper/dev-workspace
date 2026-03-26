import type { Desarrollador } from "../domain/types";
import { encabezado, separador } from "../utils/format";

export function reporteEquipo(lista: Desarrollador[]): void {
  encabezado("Estos son los dev en la compania:");

  lista.forEach((desarrollador) => {
    const estadoActivo = desarrollador.activo ? "Activo" : "Inactivo";
    console.log(`Nombre: ${desarrollador.nombre}`);
    console.log(`Rol: ${desarrollador.rol}`);
    console.log(`Seniority: ${desarrollador.seniority}`);
    console.log(`Numero de tecnologias: ${desarrollador.tecnologias.length}`);
    console.log(`Estado: ${estadoActivo}`);
    separador();
  });
}
