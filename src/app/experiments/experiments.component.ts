import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];
  missionGoals: object[] = [];


  constructor() { }

  ngOnInit() { }

  addExperiment(name: object) {
    if(!this.missionGoals.includes(name)) {
      this.missionGoals.push(name);
    }
  }

   removeExperiment(name: object) {
    let index = this.missionGoals.indexOf(name);
    this.missionGoals.splice(index,1);
   }
}
