import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {

  items = [
    {
      name: "New domain: 'dougwilliamson.space'",
      date: new Date()
    },
    {
      name: 'asdf',
      date: new Date()
    },
    {
      name: 'asdf',
      date: new Date()
    },
    {
      name: 'asdf',
      date: new Date()
    },
    {
      name: 'asdf',
      date: new Date()
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
