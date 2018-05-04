import {Component, Input} from '@angular/core'

@Component({
  selector: 'tree-node',
  template: `
        <div style="margin-left: 30px"><a *ngIf="node.children.length" (click)="toggle()"><i [ngClass]="{'glyphicon glyphicon-plus': !node.expanded, 'glyphicon glyphicon-minus': node.expanded}"></i></a> {{node.type}}: {{node.name}}
            <div style="margin-left: 30px" *ngIf="node.expanded">
                <div *ngFor="let childNode of node.children">
                    <tree-node  [node]="childNode"></tree-node>
                </div>
            </div>
        </div>
    `
})
export class TreeNodeComponent {
  @Input() node;

  toggle(){
    this.node.expanded = !this.node.expanded;
  }
}