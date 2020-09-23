const gulp = require("gulp");
const path = require("path");
const del = require("del");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

// Clean dist before compiling typescript
const clean = () => del(["dist/graphql/**/*", "dist/*.js", "dist/*.map"]);

// Compile Typescript
const tsCompile = () =>
  tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));

gulp.task("default", gulp.series(clean, tsCompile));
