import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  private baseUrl: string = environment.baseUrl;

  constructor(private _router: Router, private _http: HttpClient) {}

  public login(email: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/api/auth`;

    const body = { email, password };

    return this._http.post<any>(url, body).pipe(
      //*TAP ==> NO RETORNA NADA (VOID)
      tap(({ ok, token, uid, name }) => {
        if (ok) {
          localStorage.setItem('token', token!); //*  ! ==> Aseguro que el valor siempre llega
          localStorage.setItem('userId', uid!);
          localStorage.setItem('name', name!);
        } else {
          localStorage.clear();
        }
      }),

      map((resp) => resp.ok),
      catchError((err) => {
        return of(err.error); //! también existe from ==> retorna un observable
      })
    );
  }

  public register(name: string, email: string, password: string, rol: number) {
    const url = `${this.baseUrl}/api/auth/new`;
    const body = { name, email, password, rol };

    return this._http.post<any>(url, body).pipe(
      tap(({ ok, token, uid }) => {
        if (ok) {
          localStorage.setItem('token', token!); //*  ! ==> Aseguro que el valor siempre llega
          localStorage.setItem('userId', uid!);
          localStorage.setItem('name', name!);
        } else {
          localStorage.clear();
        }
      }),
      map((result) => {
        return result.ok;
      }),
      catchError((err) => {
        return of(err.error);
      })
    );
  }

  public isLoggedIn() :boolean {
    try{
      const localStorageValue = localStorage.getItem('token')
      return localStorageValue ? true : false;
    }catch(err){

      return false;
    }
  }

  public returnToLogin(){
    this._router.navigateByUrl('/auth/login');
  }

  public goToPages(){
    this._router.navigateByUrl('/pages/characteres');
  }

}
