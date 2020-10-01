import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AutorInterface } from '../../interfaces/autor-interface/autor';
import { environment } from '../../../environments/environment';
import { PostInterface } from '../../interfaces/post-interface/post';
//Constantes
const apiUrl = environment.ulrRequest;
@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  /**
   *
   * Servicio para traer todos los posts
   * @param data
   */
  getAllPosts() {
    return this.http.get(`${apiUrl}/api/posts/get-all-posts`);
  }

  /**
   *
   * Servicio para crear post
   * @param data
   */
  createPost(data: PostInterface) {
    return this.http.post(`${apiUrl}/api/post/create-post`, data);
  }
}
