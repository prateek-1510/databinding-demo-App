import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { HighligherDirective } from './highlighter/highligher.directive';
import { BetterHighlighterDirective } from './better-highlight/better-highlighter.directive';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CockpitComponent,
    HighligherDirective,
    BetterHighlighterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
