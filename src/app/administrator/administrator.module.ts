import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { FormsModule } from '@angular/forms';
import { AddBooksComponent } from './add-books/add-books.component';
import { DataTablesModule } from 'angular-datatables';

const routes : Routes = [
  {
    path: '', component: MainComponent,
    children:[
      {
        path:'',
        redirectTo:'/admin/home',
        pathMatch: 'full'
      },
      {
        path:'home', 
        component: HomeComponent
      },
      {
        path: 'categories',
        component: CategoriesComponent
      },
      {
        path: 'add-category',
        component: AddCategoriesComponent
      },
      {
        path: 'books',
        component: BooksComponent
      },
      {
        path: 'add-books',
        component: AddBooksComponent
      }
    ]
  }
]


@NgModule({
  declarations: [
    MainComponent, 
    CategoriesComponent,
    BooksComponent,
    HomeComponent,
    AddCategoriesComponent,
    AddBooksComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forChild(routes),
    FormsModule,
    DataTablesModule
  ]
})
export class AdministratorModule { }
