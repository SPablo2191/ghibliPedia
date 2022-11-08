import { NgModule } from '@angular/core';
import {CardModule} from 'primeng/card';
import {DataViewModule} from 'primeng/dataview';


@NgModule({
  exports : [
    CardModule,
    DataViewModule
  ]
})
export class PrimeNgImportsModule { }
