import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { GithubService } from 'src/app/services/github.service';;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  loading: boolean = false;
  showResults: boolean = false;
  users: User[] = [];
  searchTerm: string = '';
  constructor(  private githubService: GithubService) { }

  ngOnInit(): void {
  }
  search() {
    // this.loading = true;
    this.showResults = false;
    this.users = [];

    this.githubService.searchUsers(this.searchTerm).subscribe(
      (response: any) => {
        this.loading = false;
        this.showResults = true;
        for (let item of response.items) {
          this.users.push(this.githubService.makeUserObject(User, item));
        }
      });
  }
}
