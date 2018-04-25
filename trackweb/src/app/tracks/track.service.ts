import { Inject, Injectable, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../shared/config.service';
import { DebugLogService } from '../shared/debuglog.service';
import { Track, TrackConfig } from './models/track';

@Injectable()
export class TrackApiService {

  constructor(private http: HttpClient,
      private configService: ConfigService,
      private debug: DebugLogService,
    ) {
  }

  private readonly URL = 'http://localhost:62384/api/';

  public list(): Observable<Array<Track>> {
    const url = this.URL + 'Track';
    return this.http.get<Array<Track>>(url);
  }

  /*
  getTracks() {
    this.BASE_URL = 'http://localhost:62384/api/';

    const url = this.BASE_URL + 'Track';
    this.debug.Log('getTracks url: ' + url);
    this.http.get<Track>(url)
        .subscribe(data[] => {
          console.log('data: ' + data);
          console.log('track id: ' + data.id);
        },
        (err: HttpErrorResponse) => {
          this.handleError(err);
        }
      );
    }
*/


    private handleError(error: HttpErrorResponse) {
      console.error(error);
      this.debug.Log(error.message);
    }



}
