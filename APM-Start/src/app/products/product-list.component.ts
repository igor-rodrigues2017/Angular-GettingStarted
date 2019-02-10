import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{ //LifeCicle OnInit  deve implementar  método ngOnInit(): void {}
    pageTitle: string = 'Product List'
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    _listFilter: string;
    get listFilter(): string { //é chamado quando this.listFilter
        return this._listFilter;
    }
    set listFilter(value: string) { //é chamado quando é alterada a variável this._listFilter
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    
    filteredProducts: IProduct[];  
    products: IProduct[];

    //declaro no parametro do construtor o serviço, ele é injetado e um atributo é criado na classe: productService
    constructor(private productService: ProductService) { 
        
    }

    onRatingClicked(message: string): void{
        this.pageTitle = `Product List: ${message}`;
    }
    
    toggleImage(): void{
        this.showImage = !this.showImage;
    }
    
    ngOnInit(): void {
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct)=>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}