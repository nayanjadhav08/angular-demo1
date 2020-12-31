export class Employee {
  name: string;
  id: number;

  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  printEmp(): string {
    return "Emp id :" + this.id + "|| name : " + this.name;
  }
}
