import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TreeViewComponent } from './tree-view.component';
import { TreeNodeComponent } from './tree-node.component';
import { AppServices } from './app.services';

@NgModule({
  declarations: [
    AppComponent, TreeViewComponent, TreeNodeComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [ AppServices ],
  bootstrap: [AppComponent]
})
export class AppModule { }
