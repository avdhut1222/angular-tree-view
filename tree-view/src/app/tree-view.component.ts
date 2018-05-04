import { Component } from '@angular/core';
import { TreeNodeComponent } from './tree-node.component';
import { AppServices } from './app.services';

@Component({
  selector: 'tree-view',
  template: `
            <div *ngFor="let node of appServices.data">
                <tree-node [node]="node"></tree-node>
            </div>`
})
export class TreeViewComponent {
  constructor(private appServices: AppServices){}
}
