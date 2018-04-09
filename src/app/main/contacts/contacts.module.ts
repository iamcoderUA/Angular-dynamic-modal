import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactsRoutingModule } from './contacts-routing.module';

import { ContactsComponent } from './contacts.component';
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
