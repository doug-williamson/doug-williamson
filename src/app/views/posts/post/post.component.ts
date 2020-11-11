import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { IPost } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: IPost = {
    id: 1,
    timestamp: '1585972800',
    title: "'Doug's Opening Thoughts and stuff'",
    paragraphs: []
  }

  constructor(private router: Router, private route: ActivatedRoute, private postService: PostsService) {}

  ngOnInit() {
    if (this.route.snapshot.params['id']) {
      this.postService.getPost$(this.route.snapshot.params['id']).subscribe(res => {
        this.post = res;
      })
    }
  }

  clickedBack() {
    this.router.navigateByUrl('/posts');
  }
}
