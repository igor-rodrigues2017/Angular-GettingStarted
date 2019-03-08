import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http' //necessário para fazer chamada http
import { RouterModule } from '@angular/router' //necessário para fazer o roteamento entre páginas

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({ //declara components
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [ //import module
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'}, // rota default redireciona para welcome ^ 
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'} // caso não corresponda nenhuma rota: coringa -> vai redirecionar para a página de welcome, mais comum seria um 404
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
