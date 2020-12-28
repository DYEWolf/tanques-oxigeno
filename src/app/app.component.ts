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

  constructor(private statesService: StatesService) {

    this.statesService.getStates().subscribe(data => {
      this.states = data;
      console.log(this.states)
    });

  }

  selectState(state: any) {
    console.log(state)
    this.dropdownSelect = state.name;
  }
  
}
