export class Todo {
  id: number;
  title: string = "";
  complete: boolean = false;

  constructor(values: Object = {}) {
    console.log("7777");

    Object.assign(this, values);
  }
}
