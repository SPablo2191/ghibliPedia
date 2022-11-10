import { NgModule } from '@angular/core';
import {CardModule} from 'primeng/card';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
@NgModule({
  exports : [
    CardModule,
    DataViewModule,
    ButtonModule,
    TooltipModule,
    ProgressSpinnerModule
  ]
})
export class PrimeNgImportsModule { }
