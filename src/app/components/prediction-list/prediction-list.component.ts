import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Prediction } from '../../models/prediction';
import { PredictionService } from '../../services/prediction.service';

@Component({
  selector: 'app-prediction-list',
  templateUrl: './prediction-list.component.html',
  styleUrls: ['./prediction-list.component.css']
})
export class PredictionListComponent implements OnInit {

  predictions: Observable<Prediction[]>;
  constructor(private predictionService: PredictionService) { }

  ngOnInit(): void {
    this.loadPredictedData();
  }

  loadPredictedData(){
    this.predictions = this.predictionService.getAllPredictions();
  }
  deletePrediction(id){
  }
  deleteAllPredictions(){
  }
}
