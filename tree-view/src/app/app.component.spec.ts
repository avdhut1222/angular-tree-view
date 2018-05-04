import { TestBed, async } from '@angular/core/testing';
import { Component } from '@angular/core';

import { AppComponent } from './app.component';

@Component({selector: 'tree-view', template: ''})
class TreeViewComponent {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, TreeViewComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
