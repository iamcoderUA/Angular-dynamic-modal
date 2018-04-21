import { NgModule } from '@angular/core';

import { ModalBoxModule } from './modal-box/modal-box.module';
import { APP_SERVICE_PROVIDERS } from './services/index';


@NgModule({
  declarations: [],
  imports: [
    ModalBoxModule
  ],
  providers: [
    APP_SERVICE_PROVIDERS,
  ]
})
export class CoreModule {}
