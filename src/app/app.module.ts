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
import { BiographyComponent } from './views/biography/biography.component';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
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
import { OrderPipe } from './views/experience/orderby.pipe';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BacklogComponent } from './components/backlog/backlog.component';
import { MatTableModule } from '@angular/material/table';
import { TagsComponent } from './views/experience/tags/tags.component';

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
    MatSidenavModule,
    MatTabsModule,
    MatTableModule,

    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),

    RhombusShellModule.forRoot({
      applicationInfo: {
        name: 'Doug Williamson',
        version: '1.0.0-beta.14',
        logoUrl: undefined,
        logoLetters: 'DW',
        twitterUrl: 'https://twitter.com/Rhombus_TV',
        changelogUrl: 'https://github.com/doug-williamson/doug-williamson/blob/master/CHANGELOG.md',
        donateUrl: 'https://www.paypal.me/dmwilliamson08',
        contactUsLink: 'doug@dougwilliamson.space',
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
    BacklogComponent,
    BiographyComponent,
    LatestNewsComponent,

    OrderPipe,

    BacklogComponent,

    TagsComponent,
  ],
  providers: [
    AngularFirestore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
