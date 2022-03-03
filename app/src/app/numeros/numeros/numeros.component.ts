import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: 'numeros.component.html'
})
export class NumerosComponent {
  numero: number = 8;

  multiplicar()
  {
    this.numero=this.numero*2;
  }

  dividir()
  {
    this.numero=this.numero/2;
  }
  
  sumar()
  {
    this.numero=this.numero+2;
  }
  
  restar()
  {
    this.numero=this.numero-2;
  }
}