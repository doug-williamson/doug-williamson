import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynastiesComponent } from './dynasties.component';

const routes: Routes = [
  {
    path: '',
    component: DynastiesComponent,
    data: {
        breadcrumb: 'Dynasty',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynastiesRoutingModule {}
