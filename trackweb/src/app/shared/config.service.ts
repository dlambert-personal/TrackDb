import { Inject, Injectable, OnInit, } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { HttpErrorResponse, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { retry } from 'rxjs/operators/retry';

@Injectable()
export class ConfigService {
    private http: HttpClient;
    public environmentData: any;

    constructor(http: HttpClient, @Inject(APP_BASE_HREF) private baseHref: string ) {
        this.http = http;
    }

    getConfigurationObject(): any {
        return  this.environmentData;
    }

   public loadEnvironmentConfig(): Promise<any> {

    return this.http.get('./assets/env-config/env-config.json')
       .toPromise()
       .then((data) => {
            this.environmentData = data;
        return data;
        }).catch((ex) => {
            console.error('Configuration Error' + ex);
        });
    }
}
