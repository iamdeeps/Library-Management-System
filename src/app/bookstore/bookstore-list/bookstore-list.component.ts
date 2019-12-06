import { Component, OnInit } from '@angular/core';
import { bookstore } from '../bookstore.model';
import { BookService } from '../../Shared/book.service'

@Component({
  selector: 'app-bookstore-list',
  templateUrl: './bookstore-list.component.html',
  styleUrls: ['./bookstore-list.component.css']
})
export class BookstoreListComponent implements OnInit {
  bookData;
//Books:bookstore[] = [new bookstore('Communication Engineering', 'The Author of this book is Dr. Sanjay Sharma',
//'https://easyengineering.net/wp-content/uploads/2017/10/EC6651-Communication-Engineering-CE.jpg'),
//new bookstore('Mechanical Engineering', 'The Author of this book is S.Chand', 'https://4.imimg.com/data4/PP/GW/MY-25372212/mechanical-engineering-english-500x500.jpg')
//];

  constructor(public bookService:BookService) { }

  ngOnInit() {
    this.getBookDetail();
  }
  getBookDetail(){
    this.bookService.getBooks().subscribe((data)=>{
      this.bookData = data;
    })
  }

  deleteBooks(index){
    console.log("*******", index);
    this.bookService.book.bookDetails.splice(index, 1);
  }

}
