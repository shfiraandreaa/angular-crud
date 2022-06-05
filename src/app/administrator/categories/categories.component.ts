import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Categories } from '../models/categories';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoryList : Categories[] = []
  
  constructor(

    private router : Router,
    private categoriesService : CategoriesService

  ) { }

  ngOnInit(): void {
    this.getDataCategory()
  }

  getDataCategory(){
    this.categoriesService.getDataCategory().subscribe( 
      data  =>{
        console.log(data)
        this.categoryList = data
      }
    )
  }

  edit(categories: Categories){
    console.log(categories)
    this.router.navigate(["admin/add-category"], {state: {data : categories} })
  }

  delete(categories: Categories){
    this.categoriesService.deleteCategory(categories.id!).subscribe(
      data => {
        alert("Data Dengan Car Id : " + categories.id + " Name Category is : " + categories.namakategori + " Berhasil di Hapus")
        this.getDataCategory()
      }, error => {
        console.log(error)
      }
    )
  }

}
