import { Component, OnInit } from '@angular/core';
import {BookService} from './../../Shared/book.service'

@Component({
  selector: 'app-bookstore-edit',
  templateUrl: './bookstore-edit.component.html',
  styleUrls: ['./bookstore-edit.component.css']
})
export class BookstoreEditComponent implements OnInit {
  bname;
  aname;
  desc;
  constructor(public bookService:BookService) { }

  ngOnInit() {
  }
  addBooks(){
    console.log(this.bname,this.desc, this.aname)
    this.bookService.book.bookDetails.push({
    id:201,
    name:this.bname,
    description:this.desc,
    author:this.aname})
  }
  clearBooks(){
    this.bname = "";
    this.aname = "";
    this.desc = "";
  }

}
