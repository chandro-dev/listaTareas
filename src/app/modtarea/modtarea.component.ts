import { Component, Output,EventEmitter, Input } from '@angular/core';
import { tarea } from '../class/tarea';
import { ListaService } from '../lista.service';

@Component({
  selector: 'app-modtarea',
  templateUrl: './modtarea.component.html',
  styleUrls: ['./modtarea.component.css']
})
export class ModtareaComponent {
  _tarea:tarea= new tarea;
  mod:boolean=true;
  constructor(private listaService:ListaService) {
    this._tarea=listaService.getmodTarea();
    if(this._tarea.nombre!=''){
      this.mod=!this.mod;
    }
  }
  cerrarModal(){
    this._tarea.cambiarEstado('Pendiente');
    this._tarea.fecha=new Date;
    this.listaService.add(this._tarea);
    this._tarea=new tarea;
    this.listaService.setmodTarea(new tarea);
    this.listaService.changeModal();
  }
  modTarea(){
    this.listaService.actualizarTarea(this._tarea);

    this.listaService.setmodTarea(new tarea);
    this.listaService.changeModal();

    this._tarea=new tarea;
  }

}
