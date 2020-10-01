import { AutorInterface } from '../autor-interface/autor';
export class PostInterface {
  id?: number;
  titulo: string;
  contenido: string;
  imagen: string;
  autor_id: number;
  autor: AutorInterface[];
}
