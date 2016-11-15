import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'users',
	templateUrl: 'users.component.html'

})
export class UsersComponent {
	userList:[any]=[{name:'user1'},{name:'user2'},{name:'user3'}];

}