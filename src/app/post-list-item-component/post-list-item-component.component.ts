import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
    //initialisation du nombre de loveIt à 0
    this.post.loveIts = 0;
  }
  //Méthode pour la mise à jour du nombre de loveIt du post
  updateLoveIts(n: number){
    this.post.loveIts += n;  
  }

}
