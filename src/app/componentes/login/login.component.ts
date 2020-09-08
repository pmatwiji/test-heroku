import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../clases/usuario';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = new Usuario();
  nombre : string = this.usuario.nombre;
  pass : string = this.usuario.clave;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.nombre == 'admin' && this.pass == '123456') {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/error']);
    }
  }

}
