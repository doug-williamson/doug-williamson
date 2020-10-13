import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './views/experience/experience.component';
import { HomeComponent } from './views/home/home.component';
import { StreamingComponent } from './views/streaming/streaming.component';
import { BiographyComponent } from './views/biography/biography.component';
import { PostsComponent } from './views/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      breadcrumb: 'Home',
    }
  },
  {
    path: 'posts',
    loadChildren: () => import('./views/posts/posts.module').then(m => m.PostsModule),
    data: {
      breadcrumb: 'Posts',
    },
  },
  {
    path: 'biography',
    component: BiographyComponent,
    data: {
      breadcrumb: 'Biography',
    },
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    data: {
      breadcrumb: 'Experience',
    },
  },
  {
    path: 'streaming',
    component: StreamingComponent,
    data: {
      breadcrumb: 'Streaming',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
