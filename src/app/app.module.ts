import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TodoService], //service singleton
  bootstrap: [AppComponent]
})
export class AppModule { }
