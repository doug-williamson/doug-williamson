import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';
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
  mode: string;

  _selectedPost: IPost = {
    id: 1,
    timestamp: '1585972800',
    title: "Doug's Opening Thoughts and stuff",
    paragraphs: []
  }

  constructor(public media: MediaObserver, private postService: PostsService, private route: ActivatedRoute) {}

  ngOnInit() {

    if (this.route.snapshot.params['id']) {
      this.postService.getPost$(this.route.snapshot.params['id']).subscribe(res => {
        this.clickedPost(res);
      })
    }
    this.posts$ = this.postService.getPosts$();

    this.mode = this.media.isActive('gt-xs') ? 'side' : 'over';
  }

  objectValues(obj) {
    return Object.values(obj);
  }

  clickedBack() {
    this.sidenav.close();
  }

  clickedPost(post: any) {
    this._selectedPost = post;
  }
}
