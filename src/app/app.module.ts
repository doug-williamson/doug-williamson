import { NgModule } from '@angular/core';
import { RhombusShellModule } from '@dougwilliamson/rhombus-shell';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './views/experience/experience.component';
import { HomeComponent } from './views/home/home.component';
import { StreamingComponent } from './views/streaming/streaming.component';
import { AppRoutingModule } from './app.routing';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { BiographyComponent } from './views/biography/biography.component';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { BlogComponent } from './views/blog/blog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatTabsModule,

    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),

    RhombusShellModule.forRoot({
      applicationInfo: {
        name: 'Doug Williamson',
        version: '1.0.0-beta.7',
        logoUrl: undefined,
        logoLetters: 'DW',
        twitterUrl: 'https://twitter.com/Rhombus_TV_',
        changelogUrl: 'https://github.com/doug-williamson/doug-williamson/blob/master/CHANGELOG.md',
        donateUrl: 'https://www.paypal.me/dmwilliamson08',
        firebaseConfig: undefined,
      },
    }),

    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ExperienceComponent,
    HomeComponent,
    StreamingComponent,
    ComingSoonComponent,
    BiographyComponent,
    LatestNewsComponent,
    BlogComponent,
  ],
  providers: [
    AngularFirestore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
