import { proyecto } from "./data/seed";
import { reporteAlertas } from "./reports/alerts.report";
import { reporteIssues } from "./reports/issues.report";
import { reportePullRequests } from "./reports/prs.report";
import { reporteEquipo } from "./reports/team.report";

reporteEquipo(proyecto.equipoDeDesarrolladores);
reportePullRequests(proyecto.listaDePullRequests);
reporteIssues(proyecto.listaDeIssues);
reporteAlertas(proyecto);
