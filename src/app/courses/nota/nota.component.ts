import { Component, OnInit } from '@angular/core';
import {CourseService} from "../course.service";
import {Course} from "../course";

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {

  curso: Course = new Course;

  constructor(public courseService: CourseService) { }

  ngOnInit(): void {
  }

  


}
