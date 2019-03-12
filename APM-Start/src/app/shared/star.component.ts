import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number; // @Input() recebe a informação do conteinner para o component
    starWidth: number; // calulado quando algo é alterado, lifecycle OnChanges
    @Output() ratingClicked: EventEmitter<string> = // @Output manda para o conteiner um evento(apenas EventEmmiter podem ser emitidos)
        new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5; // tamanho total 75px divide por 5 estrelas
    }

    onClick(): void {
         this.ratingClicked.emit(`The rating ${this.rating} was clicked`); // emiti o evento quando for clicado
    }
}
