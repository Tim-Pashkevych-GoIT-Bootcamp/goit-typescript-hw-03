class Key {
  private signature: number = Math.random();

  getSignature(this: Key): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(this: Person): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];

  constructor(protected key: Key) {}

  comeIn(this: House, person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  openDoor(key: Key): void {}
}
class MyHouse extends House {
  openDoor(this: MyHouse, key: Key): void {
    this.door = this.key.getSignature() === key.getSignature();
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
