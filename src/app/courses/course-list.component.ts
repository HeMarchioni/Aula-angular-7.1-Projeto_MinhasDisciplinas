import {Component, OnInit} from "@angular/core";
import {CourseService} from "./course.service";
import {Course} from "./course";

@Component({
  templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit{  // OnInit componente ira aparecer realiza uma função

  curso: Course = new Course;



  constructor(public courseService: CourseService) { }

  ngOnInit(): void {


  }




  onSubmit() {
    this.courseService.save(this.curso);
    this.curso = new Course();
  }


}