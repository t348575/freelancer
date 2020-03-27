import { Component, OnInit, Input } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {JobModel} from '../jobModel';

@Component({
  selector: 'app-place-bid',
  templateUrl: './place-bid.page.html',
  styleUrls: ['./place-bid.page.scss'],
})
export class PlaceBidPage implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string;
  private job: JobModel;
  constructor(private navParams: NavParams, private modalController: ModalController) {
    this.job = navParams.get('job');
  }
  ngOnInit() {
  }
  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
