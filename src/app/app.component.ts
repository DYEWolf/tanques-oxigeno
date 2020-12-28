import { Component } from '@angular/core';
import { StatesService } from './states.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  states;

  dropdownSelect: string = 'Seleccionar';

  stateData;

  constructor(private statesService: StatesService) {

    this.statesService.getStates().subscribe(data => {
      this.states = data;
    });

  }

  getStateData(state: any) {
    this.dropdownSelect = state.name;
    const codeName = state.codeName;
    this.statesService.getStateData(codeName).subscribe(data => {
      this.stateData = data;
    })
  }
  
}
