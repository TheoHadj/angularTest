import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-one-friend',
  imports: [NgStyle],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css'
})
export class OneFriendComponent {
  
  @Input() friend!: { id: number, name: string, age: number, status: string, bio: string, xss: string };

  unAmiStatus = true;
  constructor(){
    if(Math.random() < 0.5){
      this.unAmiStatus = false;
  }
  else{
    this.unAmiStatus = true;

  }
}

  getColor(){
    if(this.unAmiStatus){
      return 'green';
    }
    else{
      return 'red';
    }
  }  

  getOneFriendStatus(){
    return this.friend.status;
  }

}
