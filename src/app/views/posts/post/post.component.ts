import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPost } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  post: IPost;

  @Output()
  navBack = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {

  }

  clickedBack() {
    this.navBack.emit();
  }
}
