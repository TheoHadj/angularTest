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
  friends = [
    { 
      id: 2, 
      name: 'Bob', 
      age: 30, 
      status: 'Offline', 
      bio: 'Passionné de jeux vidéo et de design UI/UX', 
      xss: "<script>alert('XSS Attack!')</script>" 
    },
    { 
      id: 3, 
      name: 'Charlie', 
      age: 27, 
      status: 'Online', 
      bio: 'Développeur mobile, aime le café et le code propre', 
      xss: "<script>alert('Security risk')</script>" 
    },
    { 
      id: 4, 
      name: 'Diana', 
      age: 22, 
      status: 'Away', 
      bio: 'Étudiante en informatique, adore l’IA et le machine learning', 
      xss: "<script>alert('Injection test')</script>" 
    },
    { 
      id: 5, 
      name: 'Eva', 
      age: 29, 
      status: 'Online', 
      bio: 'Développeuse full-stack, passionnée par Angular et Node.js', 
      xss: "<script>alert('Danger')</script>" 
    },
    { 
      id: 6, 
      name: 'Frank', 
      age: 26, 
      status: 'Offline', 
      bio: 'Freelance en cybersécurité, aime les challenges CTF', 
      xss: "<script>alert('Hacked!')</script>" 
    }
  ];
  


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
    this.clicked=true;
    // this.abc ="Ami ajouté : " + this.name;
    this.value = '';
  }

}
