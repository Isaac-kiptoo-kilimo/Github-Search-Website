import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repoview',
  templateUrl: './repoview.component.html',
  styleUrls: ['./repoview.component.scss']
})
export class RepoviewComponent implements OnInit {
  username: string = ''
  reponame: string = ''

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.reponame = params['reponame'];
    });
  }

}
