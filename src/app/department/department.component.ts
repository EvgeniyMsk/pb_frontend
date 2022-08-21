import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Department} from "../entity/department";
import {DepartmentDTO} from "../entity/departmentDTO";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  @Input()
  departmentId: number
  departments: DepartmentDTO[]
  isCompleted: boolean = false

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/departments/' + this.departmentId + '/departments', {
      observe: "response"
    })
      .subscribe(response => {
        this.departments = <DepartmentDTO[]>response.body
        this.departments.sort((a, b) => (a.name < b.name) ? -1 : 1);
        this.isCompleted = true
      })
  }
}
