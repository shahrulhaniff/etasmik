import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalProvider {
  
  //public mysite : string  = "http://localhost/etasmik/";
  //public mysite : string  = "http://192.168.43.194/etasmik/"; 
  //public mysite : string  = "http://localhost/etasmik/";
  public mysite : string  = "https://raxsoft.000webhostapp.com/etasmik/";

  constructor(public http: HttpClient) {
    console.log('Hello GlobalProvider Provider');
  }

}
