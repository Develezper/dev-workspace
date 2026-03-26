import type {
  Desarrollador,
  EquipoProyecto,
  Issue,
  Proyecto,
  PullRequest,
  Repositorio,
} from "../domain/types";

const ana: Desarrollador = {
  nombre: "Ana Torres",
  rol: "backend",
  seniority: "senior",
  tecnologias: ["Node.js", "TypeScript", "PostgreSQL"],
  disponibilidad: true,
  activo: true,
};

const luis: Desarrollador = {
  nombre: "Luis Rojas",
  rol: "frontend",
  seniority: "semi-senior",
  tecnologias: ["React", "TypeScript", "CSS"],
  disponibilidad: true,
  activo: true,
};

const marta: Desarrollador = {
  nombre: "Marta Gil",
  rol: "devops",
  seniority: "senior",
  tecnologias: ["Docker", "GitHub Actions", "AWS"],
  disponibilidad: false,
  activo: false,
};

const diego: Desarrollador = {
  nombre: "Diego Peña",
  rol: "fullstack",
  seniority: "junior",
  tecnologias: ["TypeScript", "Node.js", "Vue"],
  disponibilidad: true,
  activo: true,
};

export const desarrolladores: EquipoProyecto = [ana, luis, marta, diego];

export const repositorio: Repositorio = {
  nombre: "plataforma-gestion-tecnica",
  url: "https://github.com/empresa/plataforma-gestion-tecnica",
  ramaPrincipal: "main",
  lenguajePrincipal: "TypeScript",
};

export const issues: Issue[] = [
  { id: 1, titulo: "Error al crear PR", tipo: "bug", prioridad: "alta", estado: "abierto", asignadoA: ana },
  { id: 2, titulo: "Mejorar filtro de issues", tipo: "mejora", prioridad: "media", estado: "en progreso", asignadoA: luis },
  { id: 3, titulo: "Timeout en pipeline CI", tipo: "bug", prioridad: "critica", estado: "abierto", asignadoA: null },
  { id: 4, titulo: "Agregar tags por prioridad", tipo: "mejora", prioridad: "baja", estado: "resuelto", asignadoA: diego },
  { id: 5, titulo: "Validar reviewers duplicados", tipo: "bug", prioridad: "media", estado: "cerrado", asignadoA: ana },
];

export const pullRequests: PullRequest[] = [
  { id: 101, titulo: "feat: módulo de issues", estado: "abierto", autor: diego, reviewers: [ana, luis], lineasDeCodigo: 420 },
  { id: 102, titulo: "fix: manejo de estados en PR", estado: "aprobado", autor: ana, reviewers: [luis], lineasDeCodigo: 180 },
  { id: 103, titulo: "refactor: pipeline de despliegue", estado: "rechazado", autor: marta, reviewers: [ana, diego], lineasDeCodigo: 510 },
  { id: 104, titulo: "chore: limpieza de tipos", estado: "mergeado", autor: luis, reviewers: [ana], lineasDeCodigo: 95 },
];

export const proyecto: Proyecto = {
  nombre: "Gestión Técnica Interna",
  repositorio,
  listaDeIssues: issues,
  listaDePullRequests: pullRequests,
  equipoDeDesarrolladores: desarrolladores,
};
