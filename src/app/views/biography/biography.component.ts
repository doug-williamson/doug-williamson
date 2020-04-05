import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {

  step = 0;

  constructor(public media: MediaObserver) {}

  ngOnInit() {
  }

  setStep(index: number) {
    this.step = index;
  }

}
