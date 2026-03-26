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

## Estructura

El código está en:

- `src/index.ts`

Incluye:

- Tipos explícitos (sin `any`)
- Union types
- Tipos literales
- Tuplas
- Datos de ejemplo coherentes
- Reportes en consola

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

- Node.js instalado
- TypeScript (se instala con dependencias del proyecto)

## Instalación

```bash
npm install
```

## Compilar

```bash
npm run build
```

## Ejecutar

```bash
npm run dev
```

## Estado del proyecto

El proyecto compila sin errores con `tsc` y cumple los requisitos del reto.
