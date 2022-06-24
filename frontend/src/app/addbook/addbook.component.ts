import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
book={
  bookName:'',
  author:'',
  imageUrl:''
}
  constructor(public bookservice:BookService) { }

  ngOnInit(): void {
  }
addBook(addbook:NgForm){
  this.bookservice.addBooks(this.book);
  // .subscribe(
  //   res=>console.log(res),
  //   err=>console.log(err)
  // )
  console.log(this.book);
  alert("Book Created");
  addbook.reset();
}
}
