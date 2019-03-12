import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
  ],
  imports: [
    RouterModule.forChild([ // forChild é utilizado para não registrar novamente o service de roteamento
      // a ordem aqui importa, será selecionada a primeira rota que for compatível
      { path: 'products', component: ProductListComponent }, // traduzindo: /products ativa o component ProductListComponent
      { path: 'products/:id', // aqui temos :id -> é um path variable
        canActivate: [ ProductDetailGuard ], // Um guard nessa rota
        component: ProductDetailComponent }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
