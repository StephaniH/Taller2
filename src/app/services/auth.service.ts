import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { AuthResponse, Usuario } from '../auth/interface/interface';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private baseUrl: string ='http://localhost:4000/api';
  private _usuario!: Usuario;

  get usuario() {
    return { ...this._usuario };
  }


  constructor( private http: HttpClient ) { }

  registro( name: string, email: string, password: string ) {

    const url  = `${ this.baseUrl }/auth/new`;
    const body = { email, password, name };

    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap( ({ ok, token }) => {
          if ( ok ) {
            localStorage.setItem('token', token! );
          }
        }),
        map( resp => resp.ok ),
        catchError( err => of(err.error.msg) )
      );

  }



  login( email: string, password: string ) {

    const url  = `${ this.baseUrl }/auth`;
    const body = { email, password };

    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap( resp => {
          if ( resp.ok ) {
            localStorage.setItem('token', resp.token! );
          }
        }),
        map( resp => resp.ok ),
        catchError( err => of(err.error.msg) )
      );
  }




  validarToken(): Observable<boolean> {

    const url = `${ this.baseUrl }/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '' );

    return this.http.get<AuthResponse>( url, { headers } )
        .pipe(
          map( resp => {
            localStorage.setItem('token', resp.token! );
            this._usuario = {
              name: resp.name!,
              uid: resp.uid!,
              email: resp.email!
            }

            return resp.ok;
          }),
          catchError( err => of(false) )
        );

  }

  getUserLogged() {
    return {uid:([])}; 
  }

  logout() {
    localStorage.clear();
  }

  getUser():string{
    return this._usuario.name;
  }
}
