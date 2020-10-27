import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { DynastiesService } from './dynasties.service';
import { IDynasty, IDynastyYear, IDynastyWeek, IDynastyMark} from './dynasty/dynasty';

@Component({
  selector: 'app-dynasties',
  templateUrl: './dynasties.component.html',
  styleUrls: ['./dynasties.component.scss']
})
export class DynastiesComponent implements OnInit {

  dynasties: IDynasty[];
  _selectedDynasty: IDynasty = undefined;

  constructor(public media: MediaObserver, private dynastiesService: DynastiesService) {}

  ngOnInit() {
    this.dynastiesService.getDynasties$().subscribe(res => {
      this.dynasties = res;

      // change to collection for multi-dynasty collection
      this._selectedDynasty = this.dynasties[0];
    });
  }
}
