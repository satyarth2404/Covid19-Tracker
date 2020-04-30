import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SatyCovid19Service {

  constructor(private http: HttpClient) { }

  public covid19Reports(){
    return this.http.get("https://corona.lmao.ninja/v2/countries")
  }

}
