import { Component, EventEmitter, Output } from '@angular/core';
import { tarea } from '../class/tarea';
import { ListaService } from '../lista.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  _tareas: tarea[] = [];
  _tareas_Cumplidas: tarea[] = [];
  modal: boolean = false;
  constructor(private _ListaService: ListaService) {
    this._tareas = _ListaService.getLista();
    this._ListaService.modal$.subscribe((valor) => {
      this.modal = valor;
      this.refreshList();
    });
  }
  refreshList() {
    this._tareas = this._ListaService.getLista();
    this._tareas_Cumplidas = this._ListaService.getListaCumplidos();
  }
  changeModal() {
    this._ListaService.changeModal();
  }
}
