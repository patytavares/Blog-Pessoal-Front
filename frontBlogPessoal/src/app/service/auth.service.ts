import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('https://bloggenturma28.herokuapp.com/usuarios/logar', userLogin)

  }

  cadastrar(user: User): Observable<User> {
    return this.http.post<User>('https://bloggenturma28.herokuapp.com/usuarios/cadastrar', user)    
  }

  getByIdUser(id: number):Observable<User>{
    return this.http.get<User>(`https://bloggenturma28.herokuapp.com/usuarios/${id}`)
  }

  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }
}
