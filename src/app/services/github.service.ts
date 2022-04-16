import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  my_profile=new BehaviorSubject<any>([])
  // response: any;
  // next: any;
  constructor(
    private http: HttpClient
  ) { }

   getUser(username: string){
    return this.http.get<any>(`https://api.github.com/users/${username}`)
    .subscribe((response:any)=>{
      this.my_profile.next(response.data)
      
  
    })
    
  }
  
  
}
