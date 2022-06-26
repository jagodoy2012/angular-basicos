import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz-interface";

@Injectable()

export class DbzService{

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku', 
          poder: 15000 
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
      ];
      get personajes(): Personaje[]{
        return [...this._personajes]; //las llaves indicacn que es un arreglo y no deja que se modifique es de java script 
      }

        constructor(){
            
        }

        agregarPersonajes(personaje: Personaje){
            this._personajes.push(personaje);
        }
} 