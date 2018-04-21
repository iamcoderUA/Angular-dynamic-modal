import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactsComponent } from './contacts.component';
import { ContactsRoutingModule } from './contacts-routing.module';

import { IndexSectionModule } from './index-section/index-section.module';


@NgModule({
  declarations: [ContactsComponent],
  imports: [
    ContactsRoutingModule,
    IndexSectionModule
  ],
})
export class ContactsModule {
}
