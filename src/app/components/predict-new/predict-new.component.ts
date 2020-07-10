import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fakenewsdata } from '../../models/fakenewsdata';
import { Prediction } from '../../models/prediction';
import { PredictionService} from '../../services/prediction.service';

@Component({
  selector: 'app-predict-new',
  templateUrl: './predict-new.component.html',
  styleUrls: ['./predict-new.component.css']
})
export class PredictNewComponent implements OnInit {

  pred: Prediction = new Prediction();
  newsdata: Fakenewsdata = new Fakenewsdata();
  success = false;
  public canvasWidth = 400;
  public needleValue = 0;
  public centralLabel = '';
  public name = '';
  public bottomLabel = '60%';
  public options = {
    hasNeedle: true,
    needleColor: 'gray',
    needleUpdateSpeed: 1000,
    arcColors: ['#d32f2f', '#00796b'],
    arcDelimiters: [50],
    rangeLabel: ['Fake News', 'Real News'],
    needleStartValue: 0,
  };
  constructor(private predictionService: PredictionService) { }

  ngOnInit(): void {
    this.pred.predictionProb = 0;
    this.pred.predictionText = '';
    this.needleValue = this.pred.predictionProb;
    this.bottomLabel = +this.pred.predictionProb + '%';
    // this.pred.predictionText = '';
    this.pred.predictionValue = 0;
    this.pred.logits = 0;
  }

  onSubmit(){
    this.predictNew();
  }
  predictNew(){
    this.predictionService.predictNew(this.newsdata)
      .subscribe(
        data => {
          this.success = true;
          this.pred = data;
          this.pred.predictionProb = this.pred.predictionProb * 100;
          this.needleValue = this.pred.predictionProb;
          this.bottomLabel = +this.pred.predictionProb.toFixed() + '%';
        },
        error => console.log('Sorry cannot make new prediction! ' + error)
      );
  }
}
