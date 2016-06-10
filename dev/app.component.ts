import {Component} from 'angular2/core';
import {SpeakersListComponent} from "./speakers/speakers-list.component";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {SessionsListComponent} from "./sessions/sessions-list.component";
import {MenuComponent} from "./menu.component";

@Component({
    selector: 'app',
    template: `
        <div class="main">
            <router-outlet></router-outlet>
        </div>
        <main-menu></main-menu>
    `,
    directives: [SpeakersListComponent, SessionsListComponent, MenuComponent, ROUTER_DIRECTIVES],
})
@RouteConfig([
    {
        path: '/speakers/...',
        name: 'Speakers',
        component: SpeakersListComponent,
    },
    {
        path: '/sessions/...',
        name: 'Sessions',
        component: SessionsListComponent,
    },
])
export class AppComponent {
}
