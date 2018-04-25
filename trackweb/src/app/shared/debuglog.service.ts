import { ConfigService } from './config.service';
import { Injectable } from '@angular/core';

@Injectable()
export class DebugLogService {

    constructor(private configService: ConfigService) {}

    Log(message: string) {
        if (this.configService.environmentData) {
            if (this.configService.environmentData.ENV === 'development') {
                console.log(message);
            }
        } else {
            console.log('fix debug log service config...');
            console.log(message);
          }
    }
}
