import { Component, Input } from '@angular/core';
import {tarea} from '../class/tarea';
@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {
  @Input() _tarea :tarea;
  constructor() {
    this._tarea = new tarea;
  }
}
