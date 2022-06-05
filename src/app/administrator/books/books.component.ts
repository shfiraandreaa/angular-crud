import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  dtOptions: DataTables.Settings = {}

  public data = [
    {nama: 'Ajay', email: 'ajay@gmail.com', website:'www.ajay.com'},
    {nama: 'fira', email: 'firaandrea@gmail.com', website:'www.fira.com'},
    {nama: 'Ajay', email: 'ajay@gmail.com', website:'www.ajay.com'},
    {nama: 'fira', email: 'firaandrea@gmail.com', website:'www.fira.com'},
    {nama: 'Ajay', email: 'ajay@gmail.com', website:'www.ajay.com'},
    {nama: 'fira', email: 'firaandrea@gmail.com', website:'www.fira.com'},
    {nama: 'Ajay', email: 'ajay@gmail.com', website:'www.ajay.com'},
    {nama: 'fira', email: 'firaandrea@gmail.com', website:'www.fira.com'},
    {nama: 'Ajay', email: 'ajay@gmail.com', website:'www.ajay.com'},
    {nama: 'fira', email: 'firaandrea@gmail.com', website:'www.fira.com'},
    {nama: 'Ajay', email: 'ajay@gmail.com', website:'www.ajay.com'},
    {nama: 'fira', email: 'firaandrea@gmail.com', website:'www.fira.com'},
    {nama: 'Ajay', email: 'ajay@gmail.com', website:'www.ajay.com'},
    {nama: 'fira', email: 'firaandrea@gmail.com', website:'www.fira.com'},
  ];


  constructor() { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType : 'full_numbers',
      pageLength: 5,
      lengthMenu: [5,10,15],
      processing: true
    }

  }

}
