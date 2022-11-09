import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCardComponent } from './components/ui-card/ui-card.component';
import { PrimeNgImportsModule } from 'src/app/prime-ng-imports/prime-ng-imports.module';
import { UiDataViewComponent } from './components/ui-data-view/ui-data-view.component';

@NgModule({
  declarations: [UiCardComponent, UiDataViewComponent],
  imports: [CommonModule, PrimeNgImportsModule],
  exports :  [
    UiCardComponent,
    UiDataViewComponent
  ]
})
export class SharedModule {}
