import { Component } from '@angular/core';
import { ExternalComponent } from './external/external.component';
import { EventService } from '@parvathyg/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-repo';

  constructor(private eventService: EventService) { }

  public navTools: any;

  ngOnInit(): void {
    this.navTools = [{ "name": "App1", "component": ExternalComponent, icon: "notifications.svg" }, { "name": "App2", "component": ExternalComponent, icon: "help.svg" }];
    this.eventService.on('show_notification', (data => this.filterNotification(data)));
    this.eventService.on('nav_action', (data => this.externalAction(data)));
  }

  public onNavAction(action) {
    console.log("Received event from nav-component - " + action);
    // if (action === 'home') {
    //   window.open('http://localhost:4200/', "_self");
    // }
  }

  filterNotification(data) {
    console.log('filter notifications for : ' + data.name);
  }

  externalAction(data) {
    console.log('event from external component : ' + data);
  }
}
