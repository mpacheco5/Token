import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public isLogin: boolean | undefined;

  constructor(private router:Router, private loginService:LoginService) {}

  ngOnInit(): void {
    this.loginService.getAuth().subscribe(autho => {
      if(autho) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    })
  }

  Salir(){
    this.loginService.logout()
    .then(() => {this.router.navigate(['/login'])})
    .catch(error => console.log(error));
  }
}
