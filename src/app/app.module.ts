import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { PublicoComponent } from './components/publico/publico.component';
import { AutorComponent } from './components/autor/autor.component';
import { PostComponent } from './components/post/post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AdministracionComponent,
    PublicoComponent,
    AutorComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
