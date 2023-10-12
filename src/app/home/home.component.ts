import { Component,EventEmitter,Output } from '@angular/core';
import { tarea } from '../class/tarea';
import { ListaService } from '../lista.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Output() modal = new EventEmitter<void>();
  _tarea:tarea = new tarea;
  constructor(private listaService:ListaService) {
  }
  cerrarModal(){
    this._tarea.estado="Pendiente";
    this._tarea.fecha=new Date;
    this.listaService.add(this._tarea);
    this.modal.emit();
  }
}
