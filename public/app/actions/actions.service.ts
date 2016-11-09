import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Action } from './Action';

@Injectable()
export class ActionService {
	private headers = new Headers({ 'Content-Type': 'application/json' });
	private actionsUrl = 'api/actions';

	constructor(private http: Http) {

	}

	create(newAction: Action): Promise<Action> {
		return this.http.post(this.actionsUrl, JSON.stringify(newAction), { headers: this.headers })
			.toPromise()
			.then(res => res.json().data)
			.catch(this.handleError)
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}




}
