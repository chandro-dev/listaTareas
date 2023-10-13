import { Injectable } from '@angular/core';
import {tarea} from './class/tarea';
@Injectable({

  providedIn: 'root'
})
export class ListaService {
  private lista: tarea[] =[];
  getLista(): tarea[] {
    return this.lista.filter(Element =>Element.estado =='Pendiente');
  }
  add(_tarea:tarea):void{
    this.lista.push(_tarea);
  }
  rm(_tarea:tarea):tarea[]{
    this.lista=this.lista.filter(Element => Element.nombre!= _tarea.nombre&& Element.estado==='Pendiente');
    return this.lista;
  }
  getListaCumplidos():tarea[]{
    return this.lista.filter(Element =>Element.estado =='Cumplida');
  }
  actualizarTarea(tarea:tarea){
    console.log(tarea.estado);
    this.lista[this.lista.findIndex(_tarea=>_tarea.nombre==tarea.nombre)]=tarea;
    
  }
}
