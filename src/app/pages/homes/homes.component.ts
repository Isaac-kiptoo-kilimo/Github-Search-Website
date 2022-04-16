import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit {

  my_profile: any = []

  constructor(
    private githubService: GithubService
  ) { }

  ngOnInit(): void {
  console.log(this.githubService.getUser('isaac-kiptoo-kilimo'))
  }

}
