import { Component, OnInit } from '@angular/core';
import { Role } from './role';
import { RoleService } from './roles.service'


@Component({
	moduleId: module.id,
	selector: 'roles',
	templateUrl: 'roles.component.html'

})
export class RolesComponent implements OnInit {
	roleList:Role[];

	constructor(private roleService: RoleService) {

	}

	addNewRole(roleName:string): void {
		
		this.roleService.create(roleName)
			.then(role => this.roleList.push(role))
			.catch(err => console.log('madafaka error'));

	}

	loadRoles(): void {
		this.roleService.getRoles()
			.then(roles => this.roleList = roles);
	}


	ngOnInit(): void {
		this.loadRoles();

	}
}