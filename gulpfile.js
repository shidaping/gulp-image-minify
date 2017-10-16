var gulp = require('gulp');
var imagemin = require('gulp-image');
var spritesmith = require('gulp.spritesmith');

var config={
  src:'src/img/**/*',
  dist:'dist/img'
}
gulp.task('default',function(){
  return gulp.src(config.src)
  .pipe(imagemin({
    optimizationLevel: 10,
  }))
  .pipe(gulp.dest(config.dist));
})
gulp.task('sprite', function () {
  var spriteData = gulp.src('src/sprite/*')
    // .pipe(imagemin())
    .pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest('dist/sprite'));
});