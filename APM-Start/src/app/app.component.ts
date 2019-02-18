import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template:`
    <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'> {{pageTitle}} </a>
      <ul class='nav nav-pills'>
        <!--configuração de rota -->
        <li><a class='nav-link' [routerLink]="['/welcome']"> Home </a></li>
        <li><a class='nav-link' [routerLink]="['/products']"> Product List </a></li>
      </ul>
    </nav>
    <!-- onde será exibida quando a rota for ativada -->
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `
})

export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
