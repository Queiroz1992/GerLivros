import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivroFormComponent } from './components/livro-form/livro-form.component';
import { ExcluirComponent } from './components/excluir/excluir.component';

@NgModule({
  declarations: [
    AppComponent,
    LivroFormComponent,
    ExcluirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
