import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Festivos } from '../../core/entidades/Festivos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
 })
export class FestivosService {
  private url:string;


  constructor (private http: HttpClient) { 
  this.url=`${environment.urlBase}diasfestivos/`;
  }
 
  
  public listar(): Observable<Festivos[]>{
    return this.http.get<Festivos[]>(`${this.url}listar`);
  }
  

 validarFecha(dia: number, mes: number, anio: number): Observable<string> {
  const url = `${this.url}/aprobarFestivo/${dia}/${mes}?anio=${anio}`;
  return this.http.get(url, { responseType: 'text' });
  } 

}