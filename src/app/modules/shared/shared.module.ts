import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCardComponent } from './components/ui-card/ui-card.component';
import { PrimeNgImportsModule } from 'src/app/prime-ng-imports/prime-ng-imports.module';
import { UiDataViewComponent } from './components/ui-data-view/ui-data-view.component';
import { UiSpinnerComponent } from './components/ui-spinner/ui-spinner.component';

@NgModule({
  declarations: [UiCardComponent, UiDataViewComponent, UiSpinnerComponent],
  imports: [CommonModule, PrimeNgImportsModule],
  exports :  [
    UiCardComponent,
    UiDataViewComponent,
    UiSpinnerComponent
  ]
})
export class SharedModule {}
