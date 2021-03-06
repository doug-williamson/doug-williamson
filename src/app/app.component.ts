import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RhombusShellNavEntry } from '@dougwilliamson/rhombus-shell';
import { RhombusShellThemeService } from '@dougwilliamson/rhombus-shell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  _darkMode$: Observable<boolean>;
  title = 'Doug Williamson';

  navItems: RhombusShellNavEntry[] = [
    {
      name: 'Home',
      route: 'home',
    },
    {
      name: "Doug's Blog",
      route: 'posts',
    },
    {
      name: 'Biography',
      route: 'biography',
    },
    {
      name: 'Experience',
      route: 'experience',
    },
    {
      name: 'Rhombus TV',
      route: 'streaming',
    },
    {
      name: 'Dynasty',
      route: 'dynasty',
    },
  ];

  constructor(
    private themeService: RhombusShellThemeService) { }

  ngOnInit() {
    this._darkMode$ = this.themeService.darkMode$;
  }
}
