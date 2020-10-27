import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynastyComponent } from './dynasty/dynasty.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { DynastiesRoutingModule } from './dynasties.routing';
import { DynastiesComponent } from './dynasties.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { YearsComponent } from './years/years.component';
import { TeamComponent } from './years/team/team.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,

    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    MatExpansionModule,

    DynastiesRoutingModule,
  ],
  declarations: [DynastyComponent, DynastiesComponent, YearsComponent, TeamComponent],
})
export class DynastiesModule { }
