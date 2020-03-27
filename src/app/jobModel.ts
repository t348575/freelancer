export class JobModel {
    id: string;
    name: string;
    priceLow: number;
    priceHigh: number;
    currency: string;
    author: string;
    authorId: number;
    img: string;
    description: string;
    attachments: string[];
    requirements: string[];
}

