import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCardComponent } from './components/ui-card/ui-card.component';
import { PrimeNgImportsModule } from 'src/app/prime-ng-imports/prime-ng-imports.module';

@NgModule({
  declarations: [UiCardComponent],
  imports: [CommonModule, PrimeNgImportsModule],
  exports :  [
    UiCardComponent
  ]
})
export class SharedModule {}
