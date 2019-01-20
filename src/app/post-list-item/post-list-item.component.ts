import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }
  //Méthode pour la mise à jour du nombre de loveIt du post
  updateLoveIts(n: number) {
    this.post.loveIts += n;
    this.postsService.updateLoveIts(this.post, this.post.loveIts);
  }

  onDeletePost(post: Post){
    this.postsService.deletePost(post);
  }

}
