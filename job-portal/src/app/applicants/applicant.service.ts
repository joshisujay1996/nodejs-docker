import { Injectable } from '@angular/core';
import {  HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  httpClient: any;

  constructor(private http: HttpClient) { }

  endpointComp1 = 'http://localhost:5500/';
  endpointComp2 = 'http://localhost:5600/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };  

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  // // get method observa
  // getJobsComp1(): Observable<any> {
  //   return this.http.get(this.endpointComp1 + 'api/jobs').pipe(
  //     map(this.extractData)); 
    
  // }
  
  getJobComp1(id): Observable<any> {
    return this.http.get(this.endpointComp1 + 'api/jobs/' + id).pipe(
      map(this.extractData));
  }

  getJobs(): Observable<any> {
    return forkJoin(
        this.http.get(this.endpointComp1 + 'api/jobs').pipe(
        map(this.extractData)),
        this.http.get(this.endpointComp2 + 'api/jobs').pipe(
          map(this.extractData)
        )
      ); 
    
  }

  getJob(id): Observable<any> {
    return forkJoin(
        this.http.get(this.endpointComp1 + 'api/jobs/'+ id).pipe(
        map(this.extractData)),
        this.http.get(this.endpointComp2 + 'api/jobs/'+ id).pipe(
          map(this.extractData)
        )
      ); 
    
  }


  //  // get method observa
  //  getJobsComp2(): Observable<any> {
  //   return this.http.get(this.endpointComp2 + 'api/jobs').pipe(
  //     map(this.extractData));
  // }
  
  // getJobComp2(id): Observable<any> {
  //   return this.http.get(this.endpointComp2 + 'api/jobs/' + id).pipe(
  //     map(this.extractData));
  // }

  postFile(fileToUpload: File): Observable<boolean> {
    //const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.httpClient
      .post(this.endpointComp1, formData, { })
      .map(() => { return true; })
      //.catch((e) => this.handleError(e));
}
  // handleError(e: any) {
  //   throw new Error("Method not implemented.");
  // }
}
