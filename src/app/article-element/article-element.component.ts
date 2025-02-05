import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-element',
  imports: [],
  templateUrl: './article-element.component.html',
  styleUrl: './article-element.component.css'
})
export class ArticleElementComponent {

@Input() article!: { id: number, title: string, content: string, author: string, date: Date, type: string };

}
