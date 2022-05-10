// підключаємо модуль gulp із пакету gulp
import gulp from 'gulp';
// імпортуємо шляхи
import { path } from './gulp/config/path.js';

//Передаємо значення в глобальну змінну
global.app = {
  path: path,
  gulp: gulp
}

// Імпорт задачі copy
import { copy } from './gulp/tasks/copy.js';

//Виконання сценарію за замовчуванням
gulp.task('default', copy);