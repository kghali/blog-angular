import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { NewPostComponent } from './new-post/new-post.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PostsService } from './services/posts.service';

const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'posts/new', component: NewPostComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
