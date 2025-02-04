import { Component } from '@angular/core';
import { OneFriendComponent } from '../one-friend/one-friend.component';
import { timer } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-friends',
  imports: [OneFriendComponent, CommonModule, FormsModule],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})

export class ListFriendsComponent {
  public disabled : boolean= false;
  public name : string="";
  public clicked = false;
  public abc :string  ="Aucun ami";
  public value :string  ="";

  ngOnInit(){
    timer(3000).subscribe(() => {
      // this.disabled = true;
      console.log("3 seconds passed");
    });
  }
 
  onInput(event: any){
    console.log(event)
    this.name = event.target.value;
    console.log(this.name);
  }
  btnClick(){
    console.log("clicked");
    // this.clicked=true;
    // this.abc ="Ami ajouté : " + this.name;
    this.value = '';
  }

}
