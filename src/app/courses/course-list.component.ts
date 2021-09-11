import {Component, OnInit} from "@angular/core";
import {CourseService} from "./course.service";
import {Course} from "./course";

@Component({
  templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit{  

  curso: Course = new Course;



  constructor(public courseService: CourseService) { }

  ngOnInit(): void {


  }




  onSubmit() {
    this.curso.p1="0,00"
    this.curso.p2="0,00"
    this.courseService.save(this.curso);
    this.curso = new Course();
  }


}