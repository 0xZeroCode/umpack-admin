import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Role } from './role';

@Injectable()
export class RoleService {
	private headers = new Headers({ 'Content-Type': 'application/json' });
	private rolesUrl = 'api/roles';

	constructor(private http: Http) {

	}

	getRoles(): Promise<Role[]> {
		return this.http.get(this.rolesUrl)
			.toPromise()
			.then(response => {
				return response.json().data as Role[]
			})
			.catch(this.handleError);
	}


	create(name: string): Promise<Role> {
		return this.http.post(this.rolesUrl, JSON.stringify({ name: name }), { headers: this.headers })
			.toPromise()
			.then(res => res.json().data)
			.catch(this.handleError)
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}




}
