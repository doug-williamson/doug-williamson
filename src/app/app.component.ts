import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RhombusShellNavItem } from '@dougwilliamson/rhombus-shell';
import { RhombusShellThemeService } from '@dougwilliamson/rhombus-shell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  _darkMode$: Observable<boolean>;
  title = 'Doug Williamson';

  navItems: RhombusShellNavItem[] = [
    {
      label: "Doug's Blog",
      route: 'blog',
    },
    {
      label: 'Biography',
      route: 'biography',
    },
    {
      label: 'Experience',
      route: 'experience',
    },
    {
      label: 'Rhombus TV',
      route: 'streaming',
    },
  ];

  constructor(
    private themeService: RhombusShellThemeService) { }

  ngOnInit() {
    this._darkMode$ = this.themeService.darkMode$;
  }
}
