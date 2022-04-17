import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/classes/repository';
import { GithubService } from 'src/app/services/github.service';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {

  repos: any = []
  searchTerm: string = ''
  loading:boolean = false
  showResults: boolean = false

  constructor(
    private githubService: GithubService
  ) { }

  ngOnInit(): void {
   
  }

  search(){
    this.loading = true
    this.githubService.searchRepos(this.searchTerm).subscribe(response => {
      this.loading = false
      this.showResults = true
      for (let item of response.items) {
        this.repos.push(this.githubService.makeUserObject(Repository, item));
      }
    })
  }

}
