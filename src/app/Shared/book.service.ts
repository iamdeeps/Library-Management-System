import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  book = {bookDetails:[
    {
      id:101,
      name:"Communication Engineering",
      description:"This Book Belongs to the ECE Dept",
      author:"Dr. Sanjay Sharma"
    },
    {
      id:102,
      name:"Mechanical Engineering",
      description:"This Book Belongs to the Mechanical Dept",
      author:"S.Chand"
    },{
      id:103,
      name:"Basic Computer Engineering",
      description:"The Book Belongs to the IT Dept",
      author:"Sanjay Silakari"
    }
  ]}

  constructor() { }

  getBooks(){
    return of(this.book)
  }
}
