import { Component, VERSION } from "@angular/core";
import { Employee } from "./Emp";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  myname: string = "Nayan";

  id = 1212;
  a = 2;
  message: string = "";
  hello() {
    if (this.a % 2 == 0) {
      this.message = "This is even no...";
    } else {
      this.message = "This is odd number";
    }
    console.log("This is hello function");
  }

  getEmp() {
    var emp = new Employee("nayan", 10);
    console.log(emp.printEmp());
    this.message = emp.printEmp();
  }
}
