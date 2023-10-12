import { Injectable } from '@angular/core';
import {tarea} from './class/tarea';
@Injectable({

  providedIn: 'root'
})
export class ListaService {
  private lista: tarea[] =[];

  getLista(): tarea[] {
    return this.lista;
  }
  add(_tarea:tarea):void{
    this.lista.push(_tarea);
  }
}
