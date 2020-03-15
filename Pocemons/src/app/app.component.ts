import { Component, OnInit } from "@angular/core";
import { ConfigService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  arr;
  pageNumber = 1;

  title = "Pocemons";

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.configService.getList(this.pageNumber).subscribe((data: any) => {
      this.arr = data;
    });
  }

  next() {
    console.log(2);
    this.pageNumber++;
    this.configService.getList(this.pageNumber).subscribe((data: any) => {
      this.arr = data;
    });
  }

  prev() {
    this.pageNumber--;
    this.configService.getList(this.pageNumber).subscribe((data: any) => {
      this.arr = data;
    });
  }
}
