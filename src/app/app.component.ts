import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { bookActions } from './feature/book/book.actions';
import { BookComponent } from './feature/book/book.component';
import { bookSelector } from './feature/book/book.selector';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {



  private book_service = inject(BookService);
  private store = inject(Store);

  //books$ = this.book_service.obtainBooksAPI;
  books$ = this.store.select(bookSelector);


  ngOnInit(): void {
    this.store.dispatch(bookActions.loadBooks());
  }


}
