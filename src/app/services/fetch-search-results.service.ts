import { Injectable } from '@angular/core';
import {FetchJobsService} from './fetch-jobs.service';
import {JobModel} from '../jobModel';

@Injectable({
  providedIn: 'root'
})
export class FetchSearchResultsService {
  private jobs: JobModel[];
  constructor(private fetchJobsService: FetchJobsService) {
    this.fetchJobsService.getJSON().subscribe(data => {
      this.jobs = data;
    });
  }
  filterItems(searchTerm: string) {
    if (!this.jobs) {
      return;
    }
    return this.jobs.filter(item => {
      return (item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
    }).slice(0, 20);
  }
}
