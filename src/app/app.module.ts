import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InlineEditComponent } from './inline-edit/inline-edit.component';
import { NavComponent } from './nav/nav.component';
import { SubtaskListComponentComponent } from './subtask-list-component/subtask-list-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InlineEditComponent,
    NavComponent,
    SubtaskListComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    SubtaskListComponentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
