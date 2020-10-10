import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './form/form.component'
import { ContactComponent } from './contact/contact.component'
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'form', component: FormComponent },
  { path: '**', redirectTo: 'contact', pathMatch: 'full' }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
