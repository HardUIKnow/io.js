/// <reference path='./window.extension.d.ts'/>
import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'fetch',
    pure: false
})
export class FetchJsonPipe  implements PipeTransform{
    private fetchedValue:any;
    private fetchPromise:Promise<any>;

    transform(value:string, args:string[]):any {
        if (!this.fetchPromise) {
            this.fetchPromise = window.fetch(value)
                .then((result:any) => result.json())
                .then((json:any)   => this.fetchedValue = json);
        }

        return this.fetchedValue;
    }
}

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */