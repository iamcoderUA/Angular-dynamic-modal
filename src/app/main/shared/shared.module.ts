import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClickOutsideModule } from 'ng-click-outside';

import { APP_DIRECTIVES } from './directives/index';


@NgModule({
  declarations: [
    APP_DIRECTIVES,
  ],
  imports: [ ClickOutsideModule ],
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule,
    APP_DIRECTIVES,
    ClickOutsideModule
  ]
})
export class SharedModule {
}
