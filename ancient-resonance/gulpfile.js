const gulp = require('gulp');
const typescript = require('gulp-tsc');

const options = {
    pattern: ['tasks/**/*.js']
};
// const electron = require('electron-connect').server.create();

// import * as url from 'url';
// import * as electron from 'electron-connect';

require('load-gulp-tasks')(gulp, options, {});

gulp.task('default', [
    'build.default'
]);

gulp.task('build.tasks', () => {
    gulp.src(['tasks/**/*.ts'])
        .pipe(typescript())
        .pipe(gulp.dest('tasks/'));
});
