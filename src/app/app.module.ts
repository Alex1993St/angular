import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ClassesComponent } from './classes/classes.component';
import { ContactComponent } from './contact/contact.component';
import { ElementsComponent } from './elements/elements.component';
import { BlogComponent } from './blog/blog.component';

import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';


//ng generate module app-routing --flat --module=app
//або так:
const appRoutes: Routes = [
  { path: '', component: MainComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'about', component: AboutComponent},
  { path: 'classes', component: ClassesComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'elements', component: ElementsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    ClassesComponent,
    ContactComponent,
    ElementsComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
