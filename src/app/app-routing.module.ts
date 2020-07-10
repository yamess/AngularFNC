import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PredictionListComponent } from './components/prediction-list/prediction-list.component';
import { PredictNewComponent } from './components/predict-new/predict-new.component';


const routes: Routes = [
  {path: '', redirectTo: 'predictions', pathMatch: 'full'},
  {path: 'predictions', component: PredictionListComponent},
  {path: 'predict', component: PredictNewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
