import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from '../models/categories';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {

  titlePage = 'Add Data Category'
  status = "Add Data Success"
  desc = "SAVE"
  categoriesId = 0
  category = new Categories()

  constructor(

    private categoriesService : CategoriesService,
    private router : Router

  ) { }

  ngOnInit(): void {

    if (history.state){
      const s = history.state
      if( s.data != undefined){
        this.category = history.state.data
        this.titlePage = "Edit Data Category"
        this.status = "Update Data Success"
        this.desc = "Update"
      }
    }

  }


  save(){
    console.log(this.category)

    if(this.category.namakategori == undefined){
      alert("Name Category is Required")
    }else{
      this.categoriesService.addDataCategory(this.category).subscribe(
        data => {
          console.log(data)
          alert(this.status)
          this.category.namakategori =""
          this.router.navigate(["/admin/categories"])
        }, error => {
          console.log(error)
        }
      )
    }
  }

  cancel(){
    this.category.namakategori = ""
  }

}
