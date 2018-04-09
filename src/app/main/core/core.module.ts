import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { APP_SERVICE_PROVIDERS } from './services/index';
import { ModalBoxModule } from './modal-box/modal-box.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModalBoxModule
  ],
  providers: [
    APP_SERVICE_PROVIDERS,
  ]
})
export class CoreModule {}
