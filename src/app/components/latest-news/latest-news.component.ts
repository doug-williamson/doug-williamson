import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { ILatestNews, LatestNewsService } from './latest-news.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class LatestNewsComponent implements OnInit {

  displayColumns: string[] = ['timestamp', 'title'];
  expandedLatestNews: ILatestNews | null;

  latestNews: ILatestNews[];

  constructor(public media: MediaObserver, private latestNewsService: LatestNewsService) {}

  ngOnInit() {
    this.latestNewsService.getLatestNews$().subscribe(res => {
      this.latestNews = res;
    });
  }

}
