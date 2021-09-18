import { Component, OnInit } from "@angular/core";

@Component({
  selector:    "app-header",
  templateUrl: "./header.component.html",
  styleUrls:   ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  public title = "BitCoin Rates";
  public name = "Marcio Rodrigues Paiva Coelho";
  public ra = "0050831921015";
  public gits = [
    { label: "GitHub Page", link: "https://coelhomarcio.github.io" },
    { label: "Repositório GitHub", link: "https://github.com/coelhomarcio" }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
