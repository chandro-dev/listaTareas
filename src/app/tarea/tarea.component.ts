import { Component, Input,EventEmitter,Output } from '@angular/core';
import {tarea} from '../class/tarea';
import { ListaService } from '../lista.service';
@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {
  @Input() _tarea :tarea;
  @Output() refresh = new EventEmitter<void>();

  constructor( private ListaService:ListaService) {
    this._tarea = new tarea;
  }
  rmTarea(){
    this.ListaService.rm(this._tarea);
    console.log(this.ListaService.getLista());
    this.refresh.emit();
  }
  cumplida(){
    this._tarea.cambiarEstado('Cumplida');
    this.ListaService.actualizarTarea(this._tarea);
    this.refresh.emit();
  }
}
