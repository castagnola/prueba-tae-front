import { Component, OnInit, Output } from '@angular/core';
import { AutorInterface } from '../../interfaces/autor-interface/autor';
import { AdministracionService } from '../../services/administracion/administracion.service';
import Swal from 'sweetalert2';
import { AutorService } from '../../services/autor/autor.service';
import { PostService } from '../../services/post/post.service';
import { PostInterface } from 'src/app/interfaces/post-interface/post';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css'],
})
export class AdministracionComponent implements OnInit {
  //Properties
  addPostB: boolean = false;
  addAutorB: boolean = false;
  posts: PostInterface[];
  autores: AutorInterface[];

  constructor(
    private autorService: AutorService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.addAutor();
    this.getAllPosts();
    this.getAllAutores();
  }

  addPost() {
    this.addAutorB = false;
    this.addPostB = true;
  }

  addAutor() {
    this.addPostB = false;
    this.addAutorB = true;
  }

  /**
   *
   * Trae todos los post
   */
  getAllPosts() {
    this.postService.getAllPosts().subscribe((resp: any) => {
      this.posts = resp.data;
    });
  }

  /**
   * Trae todo los autores
   *
   */
  getAllAutores() {
    this.autorService.getAllAutores().subscribe((resp: any) => {
      this.autores = resp.data;
    });
  }

  /**
   *
   * Creacion del autor
   */
  onCreateAutor(data: AutorInterface) {
    this.autorService.createAutor(data).subscribe(
      (resp: any) => {
        Swal.fire(resp.message);
      },
      (error) => {
        !error.status
          ? Swal.fire('Error en la coneccion del servidor')
          : Swal.fire(error.error.message);
      }
    );
  }

  /**
   *
   *Creacion del post
   */
  onCreatePost(data: PostInterface) {
    this.postService.createPost(data).subscribe(
      (resp: any) => {
        Swal.fire(resp.message);
      },
      (error) => {
        !error.status
          ? Swal.fire('Error en la coneccion del servidor')
          : Swal.fire(error.error.message);
      }
    );
  }
}
