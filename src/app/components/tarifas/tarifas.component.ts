import { Component } from '@angular/core';

interface Tarifa {
  titulo: string;
  precio: string;
  descripcion: string;
}

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.css']
})
export class TarifasComponent {

  nombre : string = "Tarifas";

  tarifas: Tarifa[] = [
    {
      titulo: 'Tarifa básica',
      precio: '*35€',
      descripcion: 'Acceso a todas nuestras clases e instalaciones. *(+20€ de matrícula)'
    },
    {
      titulo: 'Entrenamiento personal',
      precio: '75€',
      descripcion: 'Entrenamiento personalizado, ajustado a tus necesidades y objetivos.'
    },
    {
      titulo: 'Entrenamiento personal premium',
      precio: '89€',
      descripcion: 'Entrenamiento personalizado, ajustado a tus necesidades y objetivos y además dispondrás de entrada a cualquiera de nuestras clases guiadas (pilates, funcional, spinning...).'   

    },
    {
      titulo: 'Entrenamiento personal en pareja',
      precio: '120€',
      descripcion: 'Entrenamiento personalizado, ajustado a vuestras necesidades y objetivos (60€ cada uno).'
    },
    // {
    //   titulo: 'Tarifa senior',
    //   precio: '30€',
    //   descripcion: 'Tarifa especial para mayores de 65 años. Acceso a clases de bajo impacto y actividades adaptadas.'
    // }
  ];

}
