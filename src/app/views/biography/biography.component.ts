import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { BiographyService } from './biography.service';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {

  constructor(public media: MediaObserver, private biographyService: BiographyService) {}

  ngOnInit() {
    this.getBiography();
  }

  biography;   getBiography = () =>
      this.biographyService
      .getBiography()
      .subscribe(res =>(this.biography = res));

}
