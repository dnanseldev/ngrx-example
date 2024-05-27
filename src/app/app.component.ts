import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BookComponent } from './feature/book/book.component';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  private book_service = inject(BookService);
  books$ = this.book_service.obtainBooksAPI;



}
