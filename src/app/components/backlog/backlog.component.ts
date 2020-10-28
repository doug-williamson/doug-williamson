import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { IBiography } from 'src/app/views/biography/biography';
import { BacklogService, IBacklog } from './backlog.service';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {

  displayedColumns: string[] = ['status', 'text'];

  backlog: IBacklog[];

  constructor(public media: MediaObserver, private backlogService: BacklogService) {}

  ngOnInit() {
    this.backlogService.getBacklog$().subscribe(res => {
      console.log(res);
      this.backlog = res;
    });
  }

}
