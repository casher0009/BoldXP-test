import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Boldxp";
  red = "red";
  blue = "blue";
  green = "green";
  pink = 0;
  pink0 = "pink0";
  pink1 = "pink1";
  pink2 = "pink2";
  pink3 = "pink3";
  pink4 = "pink4";

  black(id) {
    if (document.getElementById(id).hasAttribute("class")) {
      document.getElementById(id).remove();
    } else document.getElementById(id).setAttribute("class", "black");
  }
  newBlock() {
    if (this.pink != 6) {
      this.pink++;
    } else return;
  }

  circle(id) {
    document.getElementById(id).setAttribute("class", "circle");
  }
  restart() {
    window.location.reload();
  }
}
