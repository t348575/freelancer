import {Injectable} from '@angular/core';
import {JobModel} from '../jobModel';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchJobsService {
  private jobs: JobModel[];
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.jobs = data;
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get('../assets/jobs.json');
  }
  getJobs() {
    return new Promise(resolve => {
      this.getJSON().subscribe(data => {
        resolve(data);
      });
    });
  }
  getJobsRange(low: number, high: number) {
    const subject = new Subject<JobModel[]>();
    this.getJSON().subscribe(data => {
      setTimeout(() => {
        subject.next(data.slice(low, high));
      }, 500);
    });
    return subject.asObservable();
  }
  getJob(id: string) {
    return {...this.jobs.find(job => {
        return job.id === id;
      })};
  }
}
