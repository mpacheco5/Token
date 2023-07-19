import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModule } from 'src/app/modelo/usuario/usuario.module';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  usuario:UsuarioModule;

  constructor(private loginService:LoginService, private router:Router) {
    this.usuario = new UsuarioModule;
  }

  ngOnInit(): void {
  }

  Enviar(ema:string, pass:string) {
    this.usuario.email = ema;
    this.usuario.password = pass;
    this.loginService.register(this.usuario)
    .then(response => {console.log(response);
    this.router.navigate(['/login'])
    })
    .catch(error => console.log(error));
  }
}
