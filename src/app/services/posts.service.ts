import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];

  postsSubject = new Subject<Post[]>();

  constructor() {
  }

  emitPostsSubject() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts').on(
      'value', (data) => {
        this.posts = data.val() ? data.val() : [];
          //trier la liste des posts par date de création (de puls nouveau au plus ancien)
        if (this.posts.length > 1) {
          this.posts.sort((a: Post, b: Post) => {
            return b.createdAt - a.createdAt;
          });
        }
        this.emitPostsSubject();
      }
    );
  }

  addPost(post: Post) {
    post.createdAt = firebase.database.ServerValue.TIMESTAMP;
    this.posts.push(post);
    this.savePosts();
    this.emitPostsSubject();
  }

  deletePost(post: Post) {
    const indexPostToDelete = this.posts.findIndex(
      (element) => {
        if (element === post) {
          return true;
        }
      }
    );
    this.posts.splice(indexPostToDelete, 1);
    this.savePosts();
    this.emitPostsSubject();
  }

  updateLoveIts(post: Post, newLoveIts: number) {
    const indexPostToUpdate = this.posts.findIndex(
      (element) => {
        if (element === post) {
          return true;
        }
      }
    );
    this.posts[indexPostToUpdate].loveIts = newLoveIts;
    this.savePosts();
    this.emitPostsSubject();
  }
}
