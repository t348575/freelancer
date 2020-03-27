import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FetchJobsService} from '../services/fetch-jobs.service';
import {JobModel} from '../jobModel';
import {FetchCurrencyService} from '../services/fetch-currency.service';
import {ModalController} from '@ionic/angular';
import {PlaceBidPage} from '../place-bid/place-bid.page';

@Component({
  selector: 'app-job',
  templateUrl: './job.page.html',
  styleUrls: ['./job.page.scss'],
})
export class JobPage implements OnInit {
  private currentJob: JobModel;
  private color: string;
  private canPlaceBid = false;
  // tslint:disable-next-line:max-line-length
  constructor(private modalController: ModalController, private activatedRoute: ActivatedRoute, private fetchJobsService: FetchJobsService, private fetchCurrencyService: FetchCurrencyService) { }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('jobId')) {
        return;
      }
      const jobId = paramMap.get('jobId');
      this.currentJob = this.fetchJobsService.getJob(jobId);
      const colors = ['primary', 'secondary', 'tertiary', 'success', 'danger', 'warning'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    });
  }
  getColor() {
    return this.color;
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: PlaceBidPage,
      componentProps: {
        job: this.currentJob
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data.dismissed === true) {
      this.canPlaceBid = true;
      alert('Bid successfully placed!');
    }
  }
}
