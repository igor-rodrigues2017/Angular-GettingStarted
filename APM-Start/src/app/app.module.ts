import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http' //necessário para fazer chamada http
import { RouterModule } from '@angular/router' //necessário para fazer o roteamento entre páginas

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe'; //Custom Pipe
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';

@NgModule({ //declara os do nosso projeto
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [ //import de fora do nosso projeto
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      //a ordem aqui importa, será selecionada a primeira rota que for compatível
      { path: 'products', component: ProductListComponent }, // traduzindo: /products ativa o component ProductListComponent
      { path: 'products/:id', // aqui temos :id -> é um path variable
        canActivate: [ ProductDetailGuard ], // Um guard nessa rota
        component: ProductDetailComponent }, 
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'}, // rota default redireciona para welcome ^ 
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'} // caso não corresponda nenhuma rota: coringa -> vai redirecionar para a página de welcome, mais comum seria um 404
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
