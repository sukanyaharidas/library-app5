import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BookService {
 
  constructor(public http:HttpClient) { }

  addBooks(data:any){
    return this.http.post('http://localhost:4400/addbook', {data})
    .subscribe((data)=>console.log(data));

  }

  getBook(){
    return this.http.get('http://localhost:4400/mybooks');
  }

  deleteBook(id:any){
    console.log(id);
    return this.http.delete('http://localhost:4400/delete/'+id);
  }

  geteditBook(_id:any){

    return this.http.get('http://localhost:4400/'+_id);
  }

  // updateBooks(_data:any){
  //   return this.http.put('http://localhost:4400/edit', _data)
  //   .subscribe((data)=>console.log(data));

  // }

  updateBook(book:any){
    console.log(book);
    return this.http.put('http://localhost:4400/edit', {book})
    .subscribe(data=> {console.log(data)})
  }
}
