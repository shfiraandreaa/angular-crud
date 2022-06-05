import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Books } from '../models/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(

    private httpClient : HttpClient

  ) { }

  addBooks(book : Books){
    return this.httpClient.post<any>("/url/api/buku/create", book)
  }

}
