import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookstoreComponent } from './bookstore/bookstore.component';


const routes: Routes = [
  {path:"", redirectTo:"home/books", pathMatch:"full"},
  {path:"home", component:HomeComponent,
  children:[
    {path:"books", component:BookstoreComponent}
  ]
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
