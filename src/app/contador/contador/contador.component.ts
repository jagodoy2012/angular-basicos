import {Component} from '@angular/core'

@Component({
    selector:'app-contador',
    template: `
    <h1>{{titulo}}</h1>
<h3>La base es <strong>55</strong></h3>
<button (click)="acumular( base )"> + {{base}}</button>
<span>{{numero}}</span>
<button (click)="acumular(-base)"> - {{base}}</button>
    
    
    `

})
export class ContadorComponent{
    base: number = 5;
    titulo: string = 'CONTADOR APP';
    numero: number = 10;
    acumular( valor: number){
      this.numero += valor;
    }
}