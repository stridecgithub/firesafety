import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactfeedbackPage } from './contactfeedback';

@NgModule({
  declarations: [
    ContactfeedbackPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactfeedbackPage),
  ],
})
export class ContactfeedbackPageModule {}
