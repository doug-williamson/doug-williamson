import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  step = 1;

  constructor(public media: MediaObserver) { }

  ngOnInit() {
  }

  setStep(index: number) {
    this.step = index;
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }

}
