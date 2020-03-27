import { Component, OnInit } from '@angular/core';
import {JobModel} from '../jobModel';
import {FetchSearchResultsService} from '../services/fetch-search-results.service';
import {FetchJobsService} from '../services/fetch-jobs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  private jobs: JobModel[];
  public searchTerm = '';
  constructor(private fetchSearchResultsService: FetchSearchResultsService, private fetchJobsService: FetchJobsService) {

  }

  ngOnInit() {
    this.setFilteredItems();
  }
  setFilteredItems() {
    this.jobs = this.fetchSearchResultsService.filterItems(this.searchTerm);
    if (this.searchTerm.length === 0) {
      this.jobs = [];
    }
  }
}
