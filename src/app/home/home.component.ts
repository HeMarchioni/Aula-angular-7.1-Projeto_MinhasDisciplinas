import { Component, OnInit } from '@angular/core';
import {CourseService} from "../courses/course.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public courseService: CourseService) { }

  ngOnInit(): void {
  }

}