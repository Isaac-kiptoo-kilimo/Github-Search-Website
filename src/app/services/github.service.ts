import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(
    private http: HttpClient
  ) { }

  async getUser(username: string){
    return this.http.get<any>(`https://api.github.com/users/${username}`).subscribe(response => {
      return response
    })
  }
  
}
