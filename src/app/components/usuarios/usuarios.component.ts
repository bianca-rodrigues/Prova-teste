import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{

  listarUsuario: Usuario[] = [];

  constructor(private service: UsuarioService){ }

  ngOnInit(): void {
    this.service.listar().subscribe((listarUsuario) => { this.listarUsuario = listarUsuario;}
  }
}
