import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DynastiesService } from '../dynasties.service';
import { IDynastyYear } from '../dynasty/dynasty';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.scss']
})
export class YearsComponent implements OnInit {

  @Input()
  years: IDynastyYear[] = undefined;

  _selectedYear: IDynastyYear = undefined;
  dynstyYears$: Observable<IDynastyYear[]>;

  constructor(private dynastiesService: DynastiesService) {}

  ngOnInit() {
    this.dynstyYears$ = this.dynastiesService.getDynastyMarkYears$()
  }

}
