import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderContentComponent} from "./public/components/header-content/header-content.component";
import {FooterContentComponent} from "./public/components/footer-content/footer-content.component";
import {JokeListComponent} from "./norris/components/joke-list/joke-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderContentComponent,FooterContentComponent,JokeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chuck-norris';
}
