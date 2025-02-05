import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-commuenfant',
  imports: [FormsModule],
  templateUrl: './commuenfant.component.html',
  styleUrl: './commuenfant.component.css'
})
export class CommuenfantComponent {
    @Output() addUser = new EventEmitter<{ name: string; age: number; }>();
    
    name = '';
    age = 0;
  
    onSubmit() {
      if (!this.name || !this.age) {
        alert('!!!!!!');
        return;
      }
  
      
      const newUser = {
        name: this.name,
        age: this.age
      };
  
      this.addUser.emit(newUser);
    }
}
