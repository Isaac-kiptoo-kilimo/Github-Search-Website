import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  ACCESS_TOKEN: string = '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'

  headers: HttpHeaders = new HttpHeaders()


  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.headers.set('Authorization', `token ${this.ACCESS_TOKEN}`);
  }


  getUser(username: string): Observable<any> {

    const endpoint = `https://api.github.com/users/${username}`;
    return this.http.get(endpoint, { headers: this.headers }).pipe(response => {
      return response
    });
  }

  makeUserObject(target_object: any, obj_to_convert: any): any {
    const obj_to_return = new target_object();
    for (let item of Object.entries(obj_to_convert)) {
      obj_to_return[item[0]] = item[1];
    }
    return obj_to_return;
  }

  getUserRepos(username: string): Observable<any> {

    // Call git api with api_key 'dafdafdfsaf'
    // const endpoint = `https://api.github.com/users/${username}/repos?access_token=dafdafdfsaf`;


    const endpoint = `https://api.github.com/users/${username}/repos`;
    return this.http.get(endpoint, { headers: this.headers }).pipe(response => {
      return response
    });
  }

  searchUsers(search_term: string): Observable<any> {
    const endpoint = `https://api.github.com/search/users?q=${search_term}`;
    return this.http.get(endpoint).pipe(response => {
      return response
    });
  }

}
