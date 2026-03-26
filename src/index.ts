// Types base del dominio (roles, estados y estructuras reutilizables).
type RolDesarrollador = "backend" | "frontend" | "fullstack" | "devops" | "mobile" | "qa"; // Define los roles posibles del desarrollador.
type Seniority = "junior" | "semi-senior" | "senior" | "lead"; // Define el nivel de experiencia del desarrollador.
type EstadoPullRequest = "abierto" | "aprobado" | "rechazado" | "mergeado"; // Controla el estado de cada pull request.
type TipoIssue = "bug" | "mejora"; // Distingue si un issue es error o mejora.
type PrioridadIssue = "baja" | "media" | "alta" | "critica"; // Indica la urgencia de atención del issue.
type EstadoIssue = "abierto" | "en progreso" | "resuelto" | "cerrado"; // Describe el estado de avance del issue.

type Desarrollador = {
  nombre: string;
  rol: RolDesarrollador;
  seniority: Seniority;
  tecnologias: string[];
  disponibilidad: boolean;
  activo: boolean;
};

type Repositorio = {
  nombre: string;
  url: string;
  ramaPrincipal: string;
  lenguajePrincipal: string;
};

type Proyecto = {
  nombre: string;
  repositorio: Repositorio;
  listaDeIssues: Issue[];
  listaDePullRequests: PullRequest[];
  equipoDeDesarrolladores: [Desarrollador, Desarrollador, Desarrollador, Desarrollador];
};

// Interfaces para entidades operativas con detalle de trabajo técnico.
interface PullRequest {
  id: number;
  titulo: string;
  estado: EstadoPullRequest;
  autor: Desarrollador;
  reviewers: Desarrollador[];
  lineasDeCodigo: number;
}

interface Issue {
  id: number;
  titulo: string;
  tipo: TipoIssue;
  prioridad: PrioridadIssue;
  estado: EstadoIssue;
  asignadoA: Desarrollador | null;
}

// Datos de ejemplo coherentes para simular el entorno real del proyecto.
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

const desarrolladores: [Desarrollador, Desarrollador, Desarrollador, Desarrollador] = [ana, luis, marta, diego];

const repositorio: Repositorio = {
  nombre: "plataforma-gestion-tecnica",
  url: "https://github.com/empresa/plataforma-gestion-tecnica",
  ramaPrincipal: "main",
  lenguajePrincipal: "TypeScript",
};

const issues: Issue[] = [
  { id: 1, titulo: "Error al crear PR", tipo: "bug", prioridad: "alta", estado: "abierto", asignadoA: ana },
  { id: 2, titulo: "Mejorar filtro de issues", tipo: "mejora", prioridad: "media", estado: "en progreso", asignadoA: luis },
  { id: 3, titulo: "Timeout en pipeline CI", tipo: "bug", prioridad: "critica", estado: "abierto", asignadoA: null },
  { id: 4, titulo: "Agregar tags por prioridad", tipo: "mejora", prioridad: "baja", estado: "resuelto", asignadoA: diego },
  { id: 5, titulo: "Validar reviewers duplicados", tipo: "bug", prioridad: "media", estado: "cerrado", asignadoA: ana },
];

const pullRequests: PullRequest[] = [
  { id: 101, titulo: "feat: módulo de issues", estado: "abierto", autor: diego, reviewers: [ana, luis], lineasDeCodigo: 420 },
  { id: 102, titulo: "fix: manejo de estados en PR", estado: "aprobado", autor: ana, reviewers: [luis], lineasDeCodigo: 180 },
  { id: 103, titulo: "refactor: pipeline de despliegue", estado: "rechazado", autor: marta, reviewers: [ana, diego], lineasDeCodigo: 510 },
  { id: 104, titulo: "chore: limpieza de tipos", estado: "mergeado", autor: luis, reviewers: [ana], lineasDeCodigo: 95 },
];

const proyecto: Proyecto = {
  nombre: "Gestión Técnica Interna",
  repositorio,
  listaDeIssues: issues,
  listaDePullRequests: pullRequests,
  equipoDeDesarrolladores: desarrolladores,
};

// Seccion de funciones de procesamiento y reportes en consola.

// Esta funcion recorre y muestra los desarrolladores que recibe por parametro.
function reporteDesarrollador(lista: Desarrollador[]): void {
  console.log("Estos son los dev en la compania:");
  lista.forEach((desarrollador) => {
    const estadoActivo = desarrollador.activo ? "Activo" : "Inactivo";
    console.log(`Nombre: ${desarrollador.nombre}`);
    console.log(`Rol: ${desarrollador.rol}`);
    console.log(`Seniority: ${desarrollador.seniority}`);
    console.log(`Numero de tecnologias: ${desarrollador.tecnologias.length}`);
    console.log(`Estado: ${estadoActivo}`);
    console.log("---");
  });
}

// Esta funcion recorre y muestra el reporte de todos los pull requests.
function reportePullRequests(lista: PullRequest[]): void {
  console.log("Estos son los pull requests del proyecto:");
  lista.forEach((pr) => {
    let destacado = "";
    if (pr.estado === "aprobado") destacado = "[APROBADO] ";
    if (pr.estado === "mergeado") destacado = "[MERGEADO] "; 
    if (pr.estado === "rechazado") destacado = "[RECHAZADO] ";

    console.log(`${destacado}Titulo: ${pr.titulo}`);
    console.log(`Estado: ${pr.estado}`);
    console.log(`Autor: ${pr.autor.nombre}`);
    console.log(`Numero de reviewers: ${pr.reviewers.length}`);
    console.log("---");
  });
}

// Esta funcion calcula y muestra resumen de issues por estado y por tipo.
function reporteIssues(lista: Issue[]): void {
  console.log("Estos son los issues que tuvimos en el proyecto:");
  const porEstado: Record <EstadoIssue, number> = {
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
  console.log("---");
}

// Esta funcion detecta alertas de PR grandes, issues criticos sin asignar y sobrecarga de asignaciones.
function reporteAlertas(proyectoActual: Proyecto): void {
  console.log("Estas son las alertas del proyecto:");
  const limiteLineasPR = 400;
  const limiteAsignaciones = 2;

  const prsGrandes = proyectoActual.listaDePullRequests.filter(
    (pr) => pr.estado === "abierto" && pr.lineasDeCodigo > limiteLineasPR,
  );

  const issuesCriticosSinAsignar = proyectoActual.listaDeIssues.filter(
    (issue) => issue.prioridad === "critica" && issue.asignadoA === null,
  );

  const asignacionesPorDev: Record <string, number> = {};
  proyectoActual.equipoDeDesarrolladores.forEach((dev) => {
    asignacionesPorDev[dev.nombre] = 0;
  });

  proyectoActual.listaDeIssues.forEach((issue) => {
    if (issue.asignadoA) {
      const actual = asignacionesPorDev[issue.asignadoA.nombre] ?? 0;
      asignacionesPorDev [issue.asignadoA.nombre] = actual + 1;
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
  console.log("---");
}

reporteDesarrollador(proyecto.equipoDeDesarrolladores);
reportePullRequests(proyecto.listaDePullRequests);
reporteIssues(proyecto.listaDeIssues);
reporteAlertas(proyecto);
