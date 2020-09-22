const gulp = require("gulp");
const path = require("path");
const del = require("del");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

// Clean dist before compiling typescript
const clean = () => del(["dist/graphql/**/*", "dist/*.js"]);

// Compile Typescript
const tsCompile = () =>
  tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));

// Copy shcema.graphql to dist
const copySchema = () =>
  gulp
    .src(path.resolve(__dirname, "src", "graphql", "schema.graphql"))
    .pipe(gulp.dest("dist/graphql"));

gulp.task("default", gulp.series(clean, tsCompile, copySchema));
