import { Stat } from "../interfaces/stat";
export class User {
     //  Make a constructor of a github user
  constructor(
    public login: string,
    public id: number,
    public node_id: string,
    public avatar_url: string,
    public gravatar_id: string,
    public url: string,
    public html_url: string,
    public followers_url: string,
    public following_url: string,
    public gists_url: string,
    public starred_url: string,
    public subscriptions_url: string,
    public organizations_url: string,
    public repos_url: string,
    public events_url: string,
    public received_events_url: string,
    public type: string,
    public site_admin: boolean,
    public name: string,
    public company: string,
    public blog: string,
    public location: string,
    public email: string,
    public hireable: boolean,
    public bio: string,
    public public_repos: number,
    public public_gists: number,
    public followers: number,
    public following: number,
    public created_at: Date,
    public updated_at: Date
  ) { }
// Make a method to get the user's stats
  getStats(): Stat[] {
    return [
      {
        title: 'Followers',
        value: this.followers,
      },
      {
        title: 'Following',
        value: this.following,
      },
      {
        title: 'Gists',
        value: this.public_gists,
      },
      {
        title: 'Repositories',
        value: this.public_repos,
      },
    ];
  }
}
