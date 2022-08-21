import {Person} from "./person";

export interface Department {
  id: number,
  name: string,
  headDepartment: Department
  chefs: Person[],
  employees: Person[],
  departments: Department[]
}
