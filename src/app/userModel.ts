import {JobModel} from './jobModel';

export class UserModel {
    id: string;
    name: string;
    img: string;
    email: string;
    phone: string;
    description: string;
    previousJobs: JobModel[];
}
