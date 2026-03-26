# Plataforma de Gestión Técnica (TypeScript)

Modelado en memoria de una plataforma interna para la gestión técnica de proyectos de software.

## Objetivo

Representar y procesar en TypeScript las entidades:

- Desarrollador
- Repositorio
- Pull Request
- Issue
- Proyecto

Toda la lógica se ejecuta en consola, sin backend ni base de datos.

## Arquitectura

Se usa una estructura modular por responsabilidades (separation of concerns):

- `src/domain`: tipos del dominio
- `src/data`: datos de ejemplo (seed)
- `src/reports`: lógica de reportes
- `src/utils`: utilidades compartidas
- `src/index.ts`: punto de entrada (orquestación)

## Estructura

```txt
src/
  index.ts
  domain/
    types.ts
  data/
    seed.ts
  reports/
    team.report.ts
    prs.report.ts
    issues.report.ts
    alerts.report.ts
  utils/
    format.ts
```

## Reportes implementados

1. Equipo
- Nombre
- Rol
- Seniority
- Número de tecnologías

2. Pull Requests
- Título
- Estado
- Autor
- Número de reviewers
- Destacado visual para PR aprobados/mergeados

3. Issues
- Cantidad por estado
- Cantidad de bugs vs mejoras

4. Alertas
- PR abiertos con demasiadas líneas
- Issues críticos sin asignar
- Desarrolladores con demasiadas asignaciones

## Requisitos

- Bun instalado
- TypeScript disponible en el proyecto

## Instalación

```bash
npm install
```

## Ejecutar en tiempo real (Bun)

```bash
bun --watch src/index.ts
```

## Validar tipos en paralelo (opcional)

```bash
bunx tsc --noEmit --watch
```

## Compilar

```bash
npm run build
```

## Estado del proyecto

El proyecto compila sin errores con `tsc` y cumple los requisitos del reto.
