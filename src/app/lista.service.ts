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
  rm(_tarea:tarea):tarea[]{
    this.lista=this.lista.filter(Element => Element.nombre!= _tarea.nombre);
    return this.lista;
  }
}
