import {Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { DynastiesService } from '../dynasties.service';
import { IDynasty, IDynastyMark, IDynastyYear } from './dynasty';

@Component({
  selector: 'app-dynasty',
  templateUrl: './dynasty.component.html',
  styleUrls: ['./dynasty.component.scss'],
})
export class DynastyComponent implements OnInit {

  @Input()
  dynasty: IDynasty = undefined;

  @Output()
  close = new EventEmitter<boolean>();

  _selectedMark: IDynastyMark;
  dynastyMark$: Observable<IDynastyMark[]>;
  dynastyMarkYears$: Observable<IDynastyYear[]>;

  constructor(private dynastiesService: DynastiesService) {}

  ngOnInit() {
    this.dynastyMark$ = this.dynastiesService.getDynastyMark$('3WrQ17i2oOpnleoh7nWF');
  }

  clickClose() {
    this.close.next(true);
  }

  selectMark(mark: IDynastyMark) {
    this._selectedMark = mark;
    console.log(mark.id);
    this.dynastyMarkYears$ = this.dynastiesService.getDynastyMarkYears$('3WrQ17i2oOpnleoh7nWF', '6knwYblmlhEwUCHbOzfd');
  }
}
