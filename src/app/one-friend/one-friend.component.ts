import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-one-friend',
  imports: [NgStyle],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css'
})
export class OneFriendComponent {

  friend = { id: 1, name: 'Alice', age: 25, status: 'Online', bio: 'Aime le développement web', xss: "<script>alert('Hello, XSS')</script>" }
  unAmiStatus = true;
  constructor() { 
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
