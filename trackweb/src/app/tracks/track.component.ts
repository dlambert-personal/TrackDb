import { Component, OnInit } from '@angular/core';
import { TrackApiService } from './track.service';
import { DebugLogService } from '../shared/debuglog.service';
import { Track } from './models/track';

@Component({
    selector: 'app-track',
    templateUrl: './track.component.html'
  })

export class TrackComponent implements OnInit {

  tracks: Track[];

  constructor(
    private trackService: TrackApiService,
    private debug: DebugLogService,
  ) { }

  ngOnInit() {
    this.trackService.list().subscribe(
      response => {
        this.debug.Log('received trackService response');
        this.tracks = response;
      }
    );
  }
 }


