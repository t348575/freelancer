import { Component, OnInit } from '@angular/core';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';
import {error} from 'util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private androidFingerprintAuth: AndroidFingerprintAuth, private router: Router) { }

  ngOnInit() {
      this.androidFingerprintAuth.isAvailable()
          .then((result) => {
              if(result.isAvailable) {
                  this.androidFingerprintAuth.encrypt({
                      clientId: 'clientId',
                      username: 'username',
                      password: 'password'
                      // tslint:disable-next-line:no-shadowed-variable
                  }).then(result => {
                      if (result.withFingerprint) {
                        this.router.navigate(['/tabs/browse']);
                      } else if (result.withBackup) {
                          this.router.navigate(['/tabs/browse']);
                      } else {
                          alert('Could not authenticate with fingerprint');
                      }
                  }, err => {
                      if (err === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
                          alert('Fingerprint authentication cancelled');
                      } else {
                          alert(JSON.stringify(err));
                      }
                  });
              } else {
                  console.log('not available');
              }
          })
          .catch(error => console.error(error));
  }
}
