import { NgModule } from '@angular/core';
import {CardModule} from 'primeng/card';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';

@NgModule({
  exports : [
    CardModule,
    DataViewModule,
    ButtonModule
  ]
})
export class PrimeNgImportsModule { }
