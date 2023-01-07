import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ModalProviderDetailsComponentComponent } from './modal-provider-details.component.component';


@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [ModalProviderDetailsComponentComponent],
  exports: [ModalProviderDetailsModule]
})
export class ModalProviderDetailsModule { }
