import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Stud} from "./stud";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  createPost(studentI: Stud)
  {
    return this.http.post<{name:String}>('https://studentreg-c257f-default-rtdb.firebaseio.com/student.json', studentI)
  }

  enrolledPost(studentId: Stud)
  {
    return this.http.post('https://studentreg-c257f-default-rtdb.firebaseio.com/enrolledStudent.json', studentId);
  }

  createGet()
  {
    return this.http.get<Stud>('https://studentreg-c257f-default-rtdb.firebaseio.com/student.json')
      .pipe(map ((response) =>
    {
      const studentDat: Stud[] = [];
      for (const key in response)
      {
        // if(response.hasOwnProperty(key))
        // {
        // @ts-ignore
        studentDat.push({...response[key], id: key});
        // }
      }
      return studentDat;
    }));
  }

  getStud(studId:string) {

    return this.http.get<Stud>("https://studentreg-c257f-default-rtdb.firebaseio.com/enrolledStudent.json" +'/' +studId);
  }

  enrolledGet()
  {
    return this.http.get<Stud>('https://studentreg-c257f-default-rtdb.firebaseio.com/enrolledStudent.json')
      .pipe(map ((response) =>
      {
        const enrolledS: Stud[] = [];
        for (const key in response)
        {
          // if(response.hasOwnProperty(key))
          // {
          // @ts-ignore
          enrolledS.push({...response[key], id: key});
          // }
        }
        return enrolledS;
      }));
  }

  onDelete(studentId: Stud)
  {

    // @ts-ignore
    return this.http.delete('https://studentreg-c257f-default-rtdb.firebaseio.com/student.json', studentId);
  }

  deleteS(studid:string){
    return this.http.delete('https://studentreg-c257f-default-rtdb.firebaseio.com/enrolledStudent.json'+'/'+studid);
  }

}
