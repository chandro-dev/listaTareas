import { Injectable } from '@angular/core';
import { tarea } from './class/tarea';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ListaService {
  private lista: tarea[] = [];
  private mod_Tarea: tarea = new tarea();
  private modal = new BehaviorSubject<boolean>(false);
  modal$ = this.modal.asObservable();
  getLista(): tarea[] {
    return this.lista.filter((Element) => Element.estado == 'Pendiente');
  }
  add(_tarea: tarea): void {
    this.lista.push(_tarea);
  }
  rm(_tarea: tarea): tarea[] {
    this.lista = this.lista.filter(
      (Element) =>
        Element.nombre != _tarea.nombre && Element.estado === 'Pendiente'
    );
    return this.lista;
  }
  getListaCumplidos(): tarea[] {
    return this.lista.filter((Element) => Element.estado == 'Cumplida');
  }
  actualizarTarea(tarea: tarea) {
    this.lista[
      this.lista.findIndex((_tarea) => _tarea.nombre == tarea.nombre)
    ] = tarea;
  }
  setmodTarea(tarea: tarea) {
    this.mod_Tarea = tarea;
  }
  getmodTarea(): tarea {
    return this.mod_Tarea;
  }
  changeModal() {
    this.modal.next(!this.modal.value);
  }
}
