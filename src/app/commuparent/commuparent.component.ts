import { Component } from '@angular/core';
import { CommuenfantComponent } from "../commuenfant/commuenfant.component";
import { CommuaffichageComponent } from "../commuaffichage/commuaffichage.component";

@Component({
  selector: 'app-commuparent',
  imports: [CommuenfantComponent, CommuaffichageComponent],
  templateUrl: './commuparent.component.html',
  styleUrl: './commuparent.component.css'
})
export class CommuparentComponent {
  user = {name: 'John', age: 30};


  addUser(user: { name: string; age: number; }) {
    this.user= user;
  }
}
