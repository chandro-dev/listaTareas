import { Component,EventEmitter,Output } from '@angular/core';
import { tarea } from '../class/tarea';
import { ListaService } from '../lista.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 _tareas:tarea[]=[];
 modal:boolean=false;
  constructor(private _ListaService:ListaService){
    this._tareas=_ListaService.getLista();
  }
  changeModal(){
    this.refreshList();
    this.modal=!this.modal;
  }
  refreshList(){
    console.log("Refrescando Lista");
    this._tareas=this._ListaService.getLista();
  }
}
