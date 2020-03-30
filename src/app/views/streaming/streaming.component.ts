import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-streaming',
  templateUrl: './streaming.component.html',
  styleUrls: ['./streaming.component.scss'],
})
export class StreamingComponent implements OnInit {

  constructor(public media: MediaObserver) {
  }

  ngOnInit() {
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }

}
