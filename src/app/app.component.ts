import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  base: number = 5;
  titulo: string = 'CONTADOR APP';
  numero: number = 10;
  acumular( valor: number){
    this.numero += valor;
  }
  
}
 