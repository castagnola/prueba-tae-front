import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AutorInterface } from '../../interfaces/autor-interface/autor';
import { environment } from '../../../environments/environment';
import { AutorService } from '../autor/autor.service';
//Constantes
const apiUrl = environment.ulrRequest;
@Injectable({
  providedIn: 'root',
})
export class AdministracionService {
  constructor(private http: HttpClient) {}
}
