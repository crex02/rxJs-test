import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  readonly DITTO_URL = 'https://pokeapi.co/api/v2/pokemon/ditto'

  readonly ALL_POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon'

  constructor(private http: HttpClient) { 
    this.getDittoWithPromise();
    this.getDittoWithObservable();
  }

  getDittoWithPromise(): Promise<any> {
    return fetch(this.DITTO_URL)
      .then(resp => resp.json())
  }

  getDittoWithObservable():Observable <Pokemon> {
    // this.http.get(this.DITTO_URL).subscribe({
    //   next: ditto => console.log('ditto fetch', ditto),
    //   error: err => console.log(err)
    // });
    return this.http.get<Pokemon>(this.DITTO_URL)
  }
}

