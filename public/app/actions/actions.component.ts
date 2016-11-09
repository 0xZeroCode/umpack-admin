import { Component, Input, OnInit } from '@angular/core';
import { Role } from '../roles/role';
import { Action } from './action';
import { ActionService } from './actions.service';


@Component({
	selector: 'actions',
	moduleId: module.id,
	templateUrl: 'actions.component.html'
})
export class ActionsComponent implements OnInit {
	@Input() currentRole: Role;

	@Input() newAction: Action = new Action();


	constructor(private actionService: ActionService) { }

	addNewAction(): void {

		this.actionService.create(this.newAction).then(action => {
			if (!this.currentRole.actions)
				this.currentRole.actions = [];
			return this.currentRole.actions.push(action);
		})
			.catch(err => console.log(err.message));
	}

	ngOnInit(): void {
		this.newAction.name = '';
		this.newAction.pattern = '';
		this.newAction.get = false;
		this.newAction.put = false;
		this.newAction.post = false;
		this.newAction.delete = false;
	}
}


