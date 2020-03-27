import {Component, OnInit, ViewChild} from '@angular/core';
import { FetchJobsService } from '../services/fetch-jobs.service';
import { JobModel } from '../jobModel';
import { IonInfiniteScroll, IonContent } from '@ionic/angular';
import {FetchCurrencyService} from '../services/fetch-currency.service';
import {FetchUserService} from '../services/fetch-user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.page.html',
  styleUrls: ['./browse.page.scss'],
})
export class BrowsePage implements OnInit {
  // @ts-ignore
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  // @ts-ignore
  @ViewChild(IonContent) content: IonContent;
  private jobs: JobModel[];
  private jobLoadedCount = 10;
  private scrollToTopState = true;
  // tslint:disable-next-line:max-line-length
  constructor(private fetchJobsService: FetchJobsService, private fetchCurrencyService: FetchCurrencyService, private fetchUserService: FetchUserService) { }
  ngOnInit() {
    this.fetchJobsService.getJobsRange(0, 10).subscribe(data => {
      this.jobs = data;
    });
  }
  scrollToTop() {
    this.content.scrollToTop(500).then(a => {
      this.scrollToTopState = true;
    });
  }
  scrollEvent(event) {
    if (event.detail.currentY === 0) { this.scrollToTopState = true; return; }
    if (event.detail.deltaY === 0) { this.scrollToTopState = true; return; }
    if (event.detail.deltaY > 0 && this.scrollToTopState) { return; }
    if (event.detail.deltaY < 0 && !this.scrollToTopState) { return; }
    this.scrollToTopState = event.detail.deltaY > 0;
  }
  loadData(event) {
    this.fetchJobsService.getJobsRange(this.jobLoadedCount, this.jobLoadedCount + 10).subscribe(data => {
      this.jobs.push(...data);
      event.target.complete();
      if (this.jobs.length === 1000) {
        event.target.disabled = true;
      }
    });
  }
  cutString(data: string) {
    return data.replace(/(([^\s]+\s\s*){20})(.*)/, '$1…');
  }
}
