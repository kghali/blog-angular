import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

  posts: Post[] = [];

  constructor() {
    this.posts.push(new Post('Mon premier post', 
                             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur urna congue, mattis ante sed, vulputate justo. Nunc hendrerit eros nisi. Quisque dignissim leo id nunc feugiat, tincidunt porta ipsum dignissim. Nunc sit amet lorem dignissim, consequat eros ac, tempor orci. Suspendisse ex ex, tincidunt vitae scelerisque et, accumsan id nibh. Mauris tempor porttitor efficitur. Sed nulla ex, fringilla et tincidunt in, vestibulum nec urna. Suspendisse efficitur scelerisque lorem vel porttitor. Sed est tortor, porttitor non nibh ut, feugiat hendrerit mauris.', 
                             new Date()));
    this.posts.push(new Post('Mon second post', 
                             'Etiam dictum arcu et mauris venenatis gravida. Sed nisl lorem, auctor quis bibendum vel, dapibus quis ante. Nunc volutpat nisl semper neque faucibus accumsan. Suspendisse non consectetur tellus. Cras et lectus rutrum, dictum tellus ut, bibendum libero. Nullam rhoncus posuere nibh, eu porttitor tellus porttitor vitae. Nulla interdum lobortis sem, sed pharetra sem feugiat eget. Cras id ante in arcu maximus laoreet. Nunc cursus dolor non est gravida, vitae scelerisque sem vulputate. Mauris fringilla eu mi nec malesuada. Morbi sed est metus.', 
                             new Date()));
    this.posts.push(new Post('Mon troisième post', 
                    'Phasellus semper vel nulla nec molestie. Cras et orci tristique, ullamcorper nulla eget, eleifend quam. Nullam interdum est eu laoreet posuere. Etiam aliquet placerat quam vel viverra. Nulla porttitor risus quam, sagittis placerat nibh egestas interdum. In tincidunt porta nibh sit amet consequat. Quisque quis risus sed sem commodo tincidunt. Donec ut est euismod, congue turpis non, consequat felis. Nam purus nibh, hendrerit vel velit eget, scelerisque sagittis nulla. Fusce ac nisl turpis. Praesent accumsan consectetur tempor. Quisque in sem nunc. Quisque et bibendum metus.', 
                    new Date()));
  }

  ngOnInit() {

  }

}
