import { Component } from '@angular/core';
import { OneFriendComponent } from '../one-friend/one-friend.component';
import { timer } from 'rxjs';

@Component({
  selector: 'app-list-friends',
  imports: [OneFriendComponent],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})

export class ListFriendsComponent {
  public disabled : boolean= false;
  
  ngOnInit(){
    timer(3000).subscribe(() => {
      this.disabled = true;
    });
  }
}
