import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  usuario = 'r.raimundo'
  senha = 'Aninh@13311918'
  getAllUsers(page: number, pageSize: number) {
    let params = new HttpParams();
    if (page) {
      params = params.set('page', page.toString());
    }
    if (pageSize) {
      params = params.set('pageSize', pageSize.toString());
    }
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa(this.usuario+':'+this.senha)
      }),
      params: params
    };

    return this.http.get('https://combio-dts-prod-prime.totvscloud.com.br/api/btb/v1/usuarios', options );
  }
}
