import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-streaming',
  templateUrl: './streaming.component.html',
  styleUrls: ['./streaming.component.scss'],
})
export class StreamingComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }

}
