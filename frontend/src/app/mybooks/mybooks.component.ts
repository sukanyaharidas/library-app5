import { Component, OnInit } from '@angular/core';
import { bookModel } from './book.model';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.css']
})
export class MybooksComponent implements OnInit {


  books:bookModel[]|any;
  constructor(public bookservice:BookService,public router:Router) { }

  ngOnInit(): void {
    this.bookservice.getBook().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
    })
  }

  delete(data:any){

    this.bookservice.deleteBook(data._id).subscribe((datas)=>{
      console.log(datas);
    })
    alert("Book Deleted");
    this.router.navigate(['/mybooks']);
    // window.location.reload();
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/mybooks']);
  }); 
  }

  editBook(book:any){
      localStorage.setItem("editBookId", book._id.toString());
      this.router.navigate(['/edit'])
  }
//   doUpdate(i:any)
// {
//    this.bookservice.setter(i);
//    this.router.navigate(['/edit']);
// }

}
