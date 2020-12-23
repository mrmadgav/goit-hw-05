const Hero = function (name, xp, inventory) {
  this.name = name;
  this.xp = xp;
  this.inventory = inventory;
};

/*
 * Теперь у нас есть конструктор базового класса героя,
 * добавим в prototype какой-то метод.
 */
Hero.prototype.gainXp = function (amount) {
  console.log(`${this.name} gained ${amount} experience points`);
  this.xp += amount;
};

const mango = new Hero("Mango", 1000, []);
console.log(mango); // Hero { name: 'Mango', xp: 1000 }

// Так как mango это экземпляр Hero, то ему доступны методы из Hero.prototype
mango.gainXp(500); // Mango gained 500 experience points
console.log(mango); // Hero { name: 'Mango', xp: 1500 }

const Warrior = function (name, xp, inventory, weapon) {
  /*
   * Во время выполнения функции Warrior вызываем функцию Hero
   * в контексте объекта создающегося в Warrior, а так же передаем
   * аргументы для инициализации полей this.name и this.xp
   *
   * this это будущий экземпляр Warrior
   */
  Hero.call(this, name, xp, inventory);

  // Тут добавляем новое свойство - оружие
  this.weapon = weapon;
};
Warrior.prototype = Object.create(Hero.prototype);

// Сразу добавим метод для атаки в prototype воина
Warrior.prototype.attack = function () {
  console.log(`${this.name} attacks with ${this.weapon}`);
};
Warrior.prototype.pickedItem = function (itemName) {
  console.log(`${this.name} picked up ${itemName} `);
  this.inventory.push(itemName); //в массив инвентарь, наследуемый от прототипа Hero пушится itemName
};
Warrior.prototype.useItem = function (itemName) {
  if (this.inventory.includes(itemName)) {
    let index;
    while ((index = this.inventory.indexOf(itemName)) > -1) {
      this.inventory.splice(index, 1); //удаляем элемент из массива инвентарь
      if (itemName === "shield") {
        this.shield = itemName;
      } else if (itemName === "boots") {
        this.boots = itemName;
      } else if (itemName === "gloves") {
        this.gloves = itemName;
      }
    }
    console.log(`${this.name} надел ${itemName} `);
  } else {
    console.log(`нет в инвентаре`);
  }
};

const poly = new Warrior("Poly", 200, [], "sword");

console.log(poly); // Warrior {name: "Poly", xp: 200, weapon: "sword"}
poly.attack(); // Poly attacks with sword
poly.pickedItem("shield");
poly.pickedItem("flask");
poly.gainXp(1000);
poly.useItem("shield");
poly.useItem("helm");
poly.useItem("boots");
poly.pickedItem("boots");
poly.useItem("boots");
poly.pickedItem("gloves");
poly.useItem("gloves");
console.log(poly);
