import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF, Location, LocationStrategy, PathLocationStrategy, HashLocationStrategy} from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


/*   Project imports   */
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header.component';
import { ConfigService } from './shared/config.service';
import { DebugLogService } from './shared/debuglog.service';
import { TrackComponent } from './tracks/track.component';
import { TrackApiService } from './tracks/track.service';

/*   Routes    */
const routes = [
  { path: 'track', component: TrackComponent },
  { path: '**', component: TrackComponent },
    ];

// export declare const APP_BASE_HREF: InjectionToken<string>;

// **Stolen from common.es5.js */
export function parseBaseRef(url: string): string {
  const urlParsingNode = document.createElement('a');
  urlParsingNode.setAttribute('href', url);
  return (urlParsingNode.pathname.charAt(0) === '/') ? urlParsingNode.pathname :
      '/' + urlParsingNode.pathname;
}


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),   // enableTracing: true,
    HttpClientModule,
  ],
  providers: [
    DebugLogService,
    ConfigService,
    {
      provide: APP_BASE_HREF,
      useValue: parseBaseRef(window['_app_base'])
    },
    TrackApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* export function startupWorkflow(
  apiService: ApiService): () => Promise<any> {
  return (): Promise<any> => {
      return configService.loadEnvironmentConfig()
      .then(apiStartup(apiService));
  }; */

