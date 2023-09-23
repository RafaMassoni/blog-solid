import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() titulo:String = ""
  @Input() urlImagem:String = ""
  @Input() descricaoImagem:String = ""
  @Input() descricao:String = ""

}
