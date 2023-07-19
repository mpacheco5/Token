import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModule } from 'src/app/modelo/usuario/usuario.module';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  usuario:UsuarioModule;

  constructor(private loginService:LoginService, private router:Router) {
    this.usuario = new UsuarioModule;
  }

  ngOnInit(): void {
  }

  Ingresar(ema:string, pass:string) {
    this.usuario.email = ema;
    this.usuario.password = pass;
    this.loginService.login(this.usuario)
    .then(responsive => {console.log(responsive);
    this.router.navigate(['/biografia'])
    })
    .catch(error => console.log(error));
  }
}
