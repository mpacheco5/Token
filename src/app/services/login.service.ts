import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, authState } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth:Auth) { }

  getAuth() {
    return authState(this.auth);
  }

  register({email, password}: any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  
  login({email, password}:any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  
  logout() {
    return signOut(this.auth);
  }
}
