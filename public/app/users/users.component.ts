import { Component, OnInit } from "@angular/core";

import { UserService } from "./user.service";
import { RoleService } from "../roles/roles.service";

@Component({
    moduleId: module.id,
    selector: "users",
    templateUrl: "users.component.html",
    providers: [UserService, RoleService]
})
export class UsersComponent implements OnInit {
    userList: any[];
    allRoles: string[];

    constructor(private userService: UserService, private roleService: RoleService) {
    }

    ngOnInit() {
        this.roleService.getRoles()
            .then(roles => {
                this.allRoles = roles.map(role => role.name);
            });

        this.userService.loadUsers()
            .then(users => {
                this.userList = users;
            });
    }
}
