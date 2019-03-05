import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail'
  product: IProduct;
  //route: necessário para pegar o parâmetro router: necessário para chamada de roteamento
  constructor(private route: ActivatedRoute, private productService: ProductService,
              private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id'); //para pegar o parâmetro que está na url
    this.pageTitle += `: ${id}`; //concatenar a string com a existente ` `;
    this.productService.getProducts().subscribe(
      products => {
        products.forEach(p => {
          if(p.productId == id) {
            this.product = p;
          }
        });
      }
    );
  }

  onBack(): void{
    this.router.navigate(['/products']); //navegar para outra rota
  }
}
