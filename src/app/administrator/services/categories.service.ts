import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories } from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(

    private httpClient : HttpClient
    
  ) { }

  
  getDataCategory(){
    return this.httpClient.get<any>("/url/api/kategori")
  }

  addDataCategory(categories : Categories){
    return this.httpClient.post<any>("/url/api/kategori/create", categories)
  }

  updateDataCategory(categoriesId: number){
    return this.httpClient.put<any>("/url/api/kategori/update?id=",categoriesId )
  }

  deleteCategory(categoriesId: number){
    return this.httpClient.delete<any>("/url/api/kategori/"+categoriesId )
  }
}
