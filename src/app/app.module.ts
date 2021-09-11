import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {CourseListComponent} from "./courses/course-list.component";
import {CourseInfoComponent} from "./courses/course-info.component";
import { NotaComponent } from './courses/nota/nota.component';
import {CommonModule} from "@angular/common";


const routes: Routes = [

    {path: '',redirectTo: '/home', pathMatch:'full' },
    {path: 'home',component: HomeComponent},
    {path: 'courses',component: CourseListComponent},
  {path: 'courses/info/:id',component: CourseInfoComponent},
  {path: 'nota',component: NotaComponent},


];



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavBarComponent,
        CourseListComponent,
        CourseInfoComponent,
        NotaComponent,
    ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
      HttpClientModule,
      RouterModule.forRoot(routes),   
     

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }