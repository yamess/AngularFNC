import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prediction } from '../models/prediction';
import { Fakenewsdata } from '../models/fakenewsdata';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  private endpoint = 'http://localhost:8000/api/predictionlist/';
  private endpointpredict = 'http://localhost:8000/api/predict/';
  constructor(private http: HttpClient) {}

    // GET All Predictions
    getAllPredictions(): Observable<any>{
      return this.http.get(this.endpoint);
    }

    // POST - Make New prediction
    predictNew(fakenewsdata: Fakenewsdata): Observable<any> {
    return this.http.post(this.endpointpredict, fakenewsdata);
    }
}

