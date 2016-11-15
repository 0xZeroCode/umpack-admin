import { Headers, Http } from "@angular/http";
import { Injectable } from "@angular/core";

import "rxjs/add/operator/toPromise";

@Injectable()
export class UserService {
    private headers: Headers = new Headers({ "Content-Type": "application/json" });

    constructor(private http: Http) {
    }

    loadUsers(): Promise<any[]> {
        let url = "/api/users";

        return this.http.get(url, this.headers)
            .toPromise()
            .then(response => {
                return response.json().data;
            })
            .catch(this.handleError);
    }

    assignRole(user, role: string): Promise<any> {
        let url = "/api/users/" + user._id + "/roles/" + role;

        return this.http.put(url, {}, { headers: this.headers })
            .toPromise()
            .catch(this.handleError);
    }

    unassignRole(user, role: string): Promise<any> {
        let url = "/api/users/" + user._id + "/roles/" + role;

        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .catch(this.handleError);
    }

    handleError(err: any): Promise<any> {
        console.error("error occured", err);
        return Promise.reject(err);
    }
}
