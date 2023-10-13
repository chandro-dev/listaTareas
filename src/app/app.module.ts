import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { TareaComponent } from './tarea/tarea.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModtareaComponent } from './modtarea/modtarea.component';

@NgModule({
  declarations: [
    AppComponent,
    ModtareaComponent,
    HomeComponent,
    TareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
