import { Component, Input } from '@angular/core';

@Component({
	selector: 'user-details',
	moduleId: module.id,
	templateUrl: 'userDetails.component.html'
})
export class UserDetailsComponent {
	
	@Input() currentUser: any;

}