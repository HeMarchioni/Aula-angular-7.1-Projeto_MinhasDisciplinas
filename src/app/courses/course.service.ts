import {Course} from "./course";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})



export class CourseService {


  COURSES: Course[] = [];

  constructor() { }

  


  retrieveAll(){

    let values = localStorage.getItem('courses');
  if (values) {
    return (this.COURSES = JSON.parse(values));
  } else {
    return (this.COURSES = []);
  }
}


  retrieveByindice(indice:number) {
    return this.COURSES[indice];
   }


  save(course: Course) {
    this.COURSES.push(course);
    localStorage.setItem('courses', JSON.stringify(this.COURSES));
  }




  deleteByIndice(indice: number) {
    this.COURSES.splice(indice,1);
    localStorage.setItem('courses', JSON.stringify(this.COURSES));
}


}