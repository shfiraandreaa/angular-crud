import { Component, OnInit } from '@angular/core';
import { Books } from '../models/books';
import { Categories } from '../models/categories';
import { BooksService } from '../services/books.service';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  dataCategory: any
  books = new Books()

  constructor(
    private categoriesService : CategoriesService,
    private booksService : BooksService
  ) { }

  ngOnInit(): void {
    this.getDataCategory()
  }

  getDataCategory(){
    this.categoriesService.getDataCategory().subscribe( 
      data   => {
        console.log(data)
        this.dataCategory = data
      }
    )
  }

  save(){
    if(this.books.nama == undefined){
      alert("Title is Required")
    }else if(this.books.kategori_id == undefined){
      alert("Categories is Required")
    }else if(this.books.deskripsi == undefined){
      alert("Description is Required")
    }else if(this.books.penerbit == undefined){
      alert("Publisher is Required")
    }else if(this.books.tahun == undefined){
      alert("Publication Year is Required")
    }else{
      this.booksService.addBooks(this.books).subscribe(
        data => {
          console.log(data)
          alert("Add Data Success")
        }, error =>{
          console.log(error)
        }
      )
    }
  }

}
