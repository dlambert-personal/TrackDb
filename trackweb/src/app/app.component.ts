import { Component, OnInit, NgModule, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  // constructor(private configService: ConfigurationService) {
  // }

  ngOnInit() {
  }

  @HostListener('document:contextmenu', ['$event'])
  onDocumentRightClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onRightClick(event: MouseEvent) {
  }
}
