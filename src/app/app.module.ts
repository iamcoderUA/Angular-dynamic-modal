import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { MainModule } from './main/main.module';
import { ModalBoxComponent } from './core/modal-box/modal-box.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [
    ModalBoxComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    CoreModule,
    MainModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
