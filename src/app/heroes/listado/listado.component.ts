import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

 heroes: string[] = ['spiderman','Ironman','Hulk','Thor','Capitan America'];
 heroeBorrado: string='' ;
  borrarHeroe(){
    
    this.heroeBorrado = this.heroes.shift() || '';  
    
  }

}
