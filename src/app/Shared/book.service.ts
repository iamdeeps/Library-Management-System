import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  book = {bookDetails:[
    {
      id:101,
      name:"Abc",
      description:"jkhsdjkahdkaj",
      author:"xyz"
    },
    {
      id:102,
      name:"xyz",
      description:"jkhsdjkahdkaj",
      author:"xyz"
    },{
      id:103,
      name:"lmn",
      description:"jkhsdjkahdkaj",
      author:"xyz"
    }
  ]}

  constructor() { }

  getBooks(){
    return of(this.book)
  }
}
