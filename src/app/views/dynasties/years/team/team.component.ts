import { Component, Input, OnInit } from '@angular/core';
import { IDynastyYear } from '../../dynasty/dynasty';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  @Input()
  year: IDynastyYear = undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
