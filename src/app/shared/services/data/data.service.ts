import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Site } from '../../models/tracktick.models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private sites: Site[] = null;

  constructor(private httpClient: HttpClient) { }

  querySites(): Promise<Object>{
    return this.httpClient.get('http://localhost:3000/sites').toPromise();
  }

  async getSites(): Promise<Site[]> {
    if(this.sites === null || this.sites === undefined){
      await this.querySites().then((data: Site[]) => {
        this.sites = data;
      });
    }
    return Promise.resolve(this.sites);
  }
}