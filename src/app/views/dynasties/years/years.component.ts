import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { DynastiesService } from '../dynasties.service';
import { IDynastyWeek, IDynastyYear } from '../dynasty/dynasty';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class YearsComponent implements OnInit {

  displayedColumns: string[] = ['week', 'home', 'opponent', 'results'];

  @Input()
  years: IDynastyYear[] = undefined;

  _selectedYear: IDynastyYear = undefined;
  dynastyYears$: Observable<IDynastyYear[]>;
  dynastyWeeks: IDynastyWeek[];

  constructor(private dynastiesService: DynastiesService) {}

  ngOnInit(): void {
    this.dynastyYears$ = this.dynastiesService.getDynastyMarkYears$();
    this.dynastiesService.getDynastyWeeks$().subscribe(data => {
      this.dynastyWeeks = data as IDynastyWeek[];
    })
  }

}