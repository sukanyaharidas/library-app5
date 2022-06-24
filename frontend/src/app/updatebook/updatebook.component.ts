import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { BookService } from '../book.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
  Book={
    bookName:'',
    author:'',
    imageUrl:''
  }
  constructor(public bookservice:BookService, public router:Router) { }

  ngOnInit(): void {
    var bookId= localStorage.getItem("editBookId");
    this.bookservice.geteditBook(bookId).subscribe((data:any)=>{
      this.Book=JSON.parse(JSON.stringify(data));
  })}
  // update(updatebook:NgForm){
  //   this.bookservice.updateBooks(this.Book);
  //   // .subscribe(
  //   //   res=>console.log(res),
  //   //   err=>console.log(err)
  //   // )
  //   console.log(this.Book);
  //   alert("Book Updated");

  // }

  update(){
    this.bookservice.updateBook(this.Book);
    alert("Book Updated");
    console.log(this.Book);
    this.router.navigate(['/mybooks'])
  }
}
