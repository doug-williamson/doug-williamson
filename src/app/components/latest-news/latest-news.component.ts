import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {

  items = [
    {
      name: "Doug's Blog is here!",
      date: new Date('03/31/2020'),
    },
    {
      name: "New domain: 'dougwilliamson.space'",
      date: new Date('02/27/2020')
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
