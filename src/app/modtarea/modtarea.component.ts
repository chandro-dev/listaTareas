import { Component, Output,EventEmitter } from '@angular/core';
import { tarea } from '../class/tarea';
import { ListaService } from '../lista.service';

@Component({
  selector: 'app-modtarea',
  templateUrl: './modtarea.component.html',
  styleUrls: ['./modtarea.component.css']
})
export class ModtareaComponent {
  @Output() modal = new EventEmitter<void>();
  _tarea:tarea = new tarea;
  constructor(private listaService:ListaService) {
  }
  cerrarModal(){
    this._tarea.estado="Pendiente";
    this._tarea.fecha=new Date;
    this.listaService.add(this._tarea);
    this._tarea=new tarea;
    this.modal.emit();
  }
}
