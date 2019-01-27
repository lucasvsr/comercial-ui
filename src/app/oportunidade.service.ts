import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OportunidadeService {

  url = 'http://localhost:8080/oportunidades';

  constructor(private httpClient: HttpClient) { }

  listar() {
    return this.httpClient.get(this.url);
  }

  adicionar(oportunidade: any) {
    return this.httpClient.post(this.url, oportunidade);
  }

}
