import { Component, Input, OnInit } from "@angular/core";

import { UserService } from "../user.service";

@Component({
    moduleId: module.id,
    selector: "user-list-item",
    templateUrl: "user-list-item.component.html",
    providers: [UserService]
})
export class UserListItemComponent implements OnInit {
    @Input() currentUser: any;
    @Input() allRoles: string[];
    roleCheckboxes: any[] = [];

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.currentUser.roles.forEach(role => {
            this.roleCheckboxes.push({ role: role, value: true });
        });

        this.allRoles.forEach(role => {
            if (this.currentUser.roles.indexOf(role) > -1) return;
            this.roleCheckboxes.push({ role: role, value: false });
        });
    }

    toggleCheckbox(roleCheckbox) {
        let index = this.currentUser.roles.indexOf(roleCheckbox.role);

        if (index === -1) {
            return this.userService.assignRole(this.currentUser, roleCheckbox.role)
                .then(() => {
                    this.currentUser.roles.push(roleCheckbox.role);
                })
                .catch(err => {
                    roleCheckbox.value = false;
                });
        }

        this.userService.unassignRole(this.currentUser, roleCheckbox.role)
            .then(() => {
                this.currentUser.roles.splice(index, 1);
            })
            .catch(err => {
                roleCheckbox.value = true;
            });

    }
}
