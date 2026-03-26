export type RolDesarrollador = "backend" | "frontend" | "fullstack" | "devops" | "mobile" | "qa";
export type Seniority = "junior" | "semi-senior" | "senior" | "lead";
export type EstadoPullRequest = "abierto" | "aprobado" | "rechazado" | "mergeado";
export type TipoIssue = "bug" | "mejora";
export type PrioridadIssue = "baja" | "media" | "alta" | "critica";
export type EstadoIssue = "abierto" | "en progreso" | "resuelto" | "cerrado";

export type Desarrollador = {
  nombre: string;
  rol: RolDesarrollador;
  seniority: Seniority;
  tecnologias: string[];
  disponibilidad: boolean;
  activo: boolean;
};

export type Repositorio = {
  nombre: string;
  url: string;
  ramaPrincipal: string;
  lenguajePrincipal: string;
};

export interface PullRequest {
  id: number;
  titulo: string;
  estado: EstadoPullRequest;
  autor: Desarrollador;
  reviewers: Desarrollador[];
  lineasDeCodigo: number;
}

export interface Issue {
  id: number;
  titulo: string;
  tipo: TipoIssue;
  prioridad: PrioridadIssue;
  estado: EstadoIssue;
  asignadoA: Desarrollador | null;
}

export type EquipoProyecto = [Desarrollador, Desarrollador, Desarrollador, Desarrollador];

export type Proyecto = {
  nombre: string;
  repositorio: Repositorio;
  listaDeIssues: Issue[];
  listaDePullRequests: PullRequest[];
  equipoDeDesarrolladores: EquipoProyecto;
};
