import { Component, Input } from '@angular/core';
import { BookModel } from './book.model';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  @Input() book: BookModel = {
    id: 0,
    name: '',
  };

}
