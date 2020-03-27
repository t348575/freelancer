import { Component, OnInit } from '@angular/core';
import {UserModel} from '../userModel';
import {ActivatedRoute} from '@angular/router';
import {FetchUserService} from '../services/fetch-user.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {
  private user: UserModel;
  constructor(private activatedRoute: ActivatedRoute, private fetchUserService: FetchUserService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('authorId')) {
        return;
      }
      this.user = this.fetchUserService.getUser(paramMap.get('authorId'));
    });
  }
}
