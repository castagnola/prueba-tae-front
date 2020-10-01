import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AutorInterface } from '../../interfaces/autor-interface/autor';
import { environment } from '../../../environments/environment';
//Constantes
const apiUrl = environment.ulrRequest;
@Injectable({
  providedIn: 'root',
})
export class AutorService {
  constructor(private http: HttpClient) {}

  /**
   *
   * Servicio para crear autores
   * @param data
   */
  createAutor(data: AutorInterface) {
    return this.http.post(`${apiUrl}/api/autores/create-autor`, data);
  }

  /**
   *
   * Servicio para traer todos autores
   */
  getAllAutores() {
    return this.http.get(`${apiUrl}/api/autores/get-all-autores`);
  }
}
