import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'events';
import {Router} from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  optionSelected = new EventEmitter();
  constructor(public router:Router) { }

  ngOnInit() {
  }

  onSelect(option:string){
    this.optionSelected.emit(option)  
  }

  goToBooks(){
    this.router.navigate(['home','books'])
  }
}
