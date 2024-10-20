import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarifa-card',
  templateUrl: './tarifa-card.component.html',
  styleUrls: ['./tarifa-card.component.css']
})
export class TarifaCardComponent {

  @Input() titulo!: string;
  @Input() precio!: string;
  @Input() descripcion!: string;

}
