import * as nodePath from 'path'; //імпортуємо модуль синкаксис Es6
const rootFolder = nodePath.basename(nodePath.resolve()); // отримуєм ім'я папаки проекту Test

const buildFolder = `./build`; //шлях до папки з результатом
const srcFolder = `./src`; // шлях до папки src

//створюємо загальний об'єкт path де буде зберігатися вся інформація по шляхам до файлів чи папкам
// для того щоб використовувати ці шляхи в інших файлах нам потрібно експортувати цей об'єкт зі шляхами

export const path = {
  build: {
    files: `${buildFolder}/files/`
  },
  src: {
    files: `${srcFolder}/files/**/*.*`, // ** - будь яка вложеньсть; *.* - всі файли з будь-якою назвою та розширенням
  },
  watch: {},
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}