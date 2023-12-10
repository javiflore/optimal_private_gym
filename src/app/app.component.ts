import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'optimal_private_gym';
  cardCookie: HTMLElement | null | undefined;

  constructor(){}

  ngOnInit() {
    this.cardCookie = document.getElementById('cardCookie');
  }

  cerrarCookies() {
    if (this.cardCookie) {
      this.cardCookie.style.display = 'none';
    } else {
      console.error('El elemento cardCookie no se ha encontrado');
    }
  }
}
