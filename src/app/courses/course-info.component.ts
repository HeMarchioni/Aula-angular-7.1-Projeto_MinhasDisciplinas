import {Component, OnInit} from "@angular/core";

import {CourseService} from "./course.service";
import {Course} from "./course";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit{


  constructor(public courseService: CourseService,private router: Router,private route: ActivatedRoute) {
  }

  indice: number;
  curso: Course = new Course;


  ngOnInit(){

    this.curso = new Course();

    this.indice = this.route.snapshot.params['id'];


    this.curso = this.courseService.retrieveByindice(this.indice);

  }

  onSubmit() {
    this.router.navigate(['/courses']);
  }


}
