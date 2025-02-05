import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-article',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {
  @Output() addArticle = new EventEmitter<{ title: string; content: string; author: string; date: Date; type: string }>();

  title = '';
  content = '';
  author = '';
  type = 'article';

  onSubmit() {
    if (!this.title || !this.content || !this.author) {
      alert('!!!!!!');
      return;
    }

    const newArticle = {
      title: this.title,
      content: this.content,
      author: this.author,
      date: new Date(),
      type: this.type
    };

    this.addArticle.emit(newArticle);

  }
}
