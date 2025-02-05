import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-commuaffichage',
  imports: [],
  templateUrl: './commuaffichage.component.html',
  styleUrl: './commuaffichage.component.css'
})
export class CommuaffichageComponent {
  @Input() user!: {name: string, age: number};
  
}
