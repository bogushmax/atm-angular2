var gulp = require('gulp');
var ts = require('gulp-typescript');
var less = require('gulp-less');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('typescript', function () {
    return gulp.src('app/**/*.ts')
        .pipe(ts(tsProject))
        .pipe(gulp.dest('app'));
});

gulp.task('less', function () {
    return gulp.src('app/**/*.less')
        .pipe(less({}))
        .pipe(gulp.dest('app'));
});

gulp.task('watch', function () {
    gulp.watch('app/**/*.ts',   [ 'typescript' ]);
    gulp.watch('app/**/*.less', [ 'less' ]);
});

gulp.task('default', [ 'typescript', 'less', 'watch' ]);