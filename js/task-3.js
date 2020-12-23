// Напиши класс Storage, который будет создавать объекты для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих
class Storage {
  constructor(name) {
    this.name = name;
  }
  getItems() {
    return this.name;
  }
  addItem(item) {
    this.name.push(item);
    return this.name;
  }
  removeItem(item) {
    if (this.name.includes(item)) {
      let index;
      while ((index = this.name.indexOf(item)) > -1) {
        this.name.splice(index, 1);
      }
    }
    return this.name;
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
