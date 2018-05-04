import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class AppServices{
    
    data;
    
    constructor(private http: Http) {
        this.http.get('assets/data.json')
                .subscribe(res => this.data = res.json());
    }
}