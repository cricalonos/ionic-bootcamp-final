import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Post } from '../../interfaces/post.interface';
import { PostsProvider } from '../../providers/posts/posts';

@Component({
  selector: 'page-list-posts',
  templateUrl: 'list-posts.html',
})
export class ListPostsPage {

  // Listado de posts que serán mostrados.
  postsList$: Post[];

  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController, private postsProvider: PostsProvider) {
    // Se muestra el loading durante el proceso de consulta de los posts.
    let loader = this.loadingCtrl.create({
      content: "Loading posts..."
    });
    loader.present();
    // Se realiza la consulta de los posts.
    this.postsProvider.getPots().subscribe((content) => {
      this.postsList$ = content;
      loader.dismiss();
    })
  }

  /**
   * Método que redirige a la página en la que se verá el detalle del POST seleccionado.
   * @param post Post al que se le verá el detalle.
   */
  detailPost(post: Post): void {
    this.navCtrl.push('DetailPostPage', { post });
  }

}
