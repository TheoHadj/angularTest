import { Component } from '@angular/core';

@Component({
  selector: 'app-one-friend',
  imports: [],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css'
})
export class OneFriendComponent {

  friend = { id: 1, name: 'Alice', age: 25, status: 'Online', bio: 'Aime le développement web', xss: "<script>alert('Hello, XSS')</script>" }


  
  getOneFriendStatus(){
    return this.friend.status;
  }
}
