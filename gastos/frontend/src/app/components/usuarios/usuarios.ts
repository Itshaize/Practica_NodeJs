import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.html',
  standalone: false,
  styleUrl: './usuarios.css'
})
export class UsuariosComponent implements OnInit {
  usuarios: User[] = [];
  cargando = true;
  error = '';
  busqueda = '';

  constructor(
    private userService: UserService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  get usuariosFiltrados(): User[] {
    const termino = this.busqueda.trim().toLocaleLowerCase('es');
    if (!termino) {
      return this.usuarios;
    }

    return this.usuarios.filter(usuario =>
      [usuario.name, usuario.username, usuario.email, usuario.company.name]
        .some(valor => valor.toLocaleLowerCase('es').includes(termino))
    );
  }

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.cargando = true;
    this.error = '';

    this.userService.obtenerDatos().subscribe({
      next: usuarios => {
        this.usuarios = usuarios;
        this.cargando = false;
        this.changeDetectorRef.markForCheck();
      },
      error: () => {
        this.error = 'No se pudo conectar con JSONPlaceholder.';
        this.cargando = false;
        this.changeDetectorRef.markForCheck();
      }
    });
  }
}
