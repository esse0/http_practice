export class ResponseDto{
    status: number;
    statusText: string;
    data: any;

    constructor(data: any, status: number, statusText:string){
        this.data = data;
        this.status = status;
        this.statusText = statusText;
    }
}