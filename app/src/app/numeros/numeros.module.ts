import { NgModule } from '@angular/core';

import { NumerosComponent } from './numeros/numeros.component';

@NgModule({
  declarations: [
    NumerosComponent
  ],
  exports:[
      NumerosComponent
    ]
})
export class NumerosModule { 
    
}
