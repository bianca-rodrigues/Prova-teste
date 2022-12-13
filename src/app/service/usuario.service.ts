import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Usuario } from '../components/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  listar(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.API);
  }
}
