import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { IPost } from './post/post';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @ViewChild('userDrawer') private sidenav: MatSidenav;

  posts$: Observable<IPost[]>;
  _selectedPost: IPost = {
    id: 1,
    timestamp: '1585972800',
    title: "Doug's Opening Thoughts and stuff",
    paragraphs: []
  }

  constructor(public media: MediaObserver, private postService: PostsService) {}

  ngOnInit() {
    this.posts$ = this.postService.getPosts$();
  }

  objectValues(obj) {
    return Object.values(obj);
  }

  clickedBack() {
    this.sidenav.close();
  }
}
