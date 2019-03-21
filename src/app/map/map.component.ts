import { Component, OnInit, OnDestroy } from '@angular/core';
import { MapService } from './map.service';
import { AirStation } from './airStation.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {

  airStations: AirStation[];
  airStationsSub: Subscription;

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.airStationsSub = this.mapService.fetchData().subscribe(data => {
      if(!data) {
        return;
      }
      this.airStations = data;
    });
  }

  ngOnDestroy() {
    this.airStationsSub.unsubscribe();
  }

}
