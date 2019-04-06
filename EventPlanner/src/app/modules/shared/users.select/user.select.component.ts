import { Component, Input, Output } from "@angular/core";
import { UserService } from '../../users/user.service';
import { User } from 'src/app/models/user.model';
import { EventEmitter } from 'events';

interface UserSelection {
    selected: Boolean,
    model: User
}

@Component({
    selector: 'users-select',
    templateUrl: 'user.select.component.html'
})
export class UserSelectComponent {
    users: UserSelection[] = [];

    @Input() selectedUsers: User[];
    @Output() usersChange: EventEmitter = new EventEmitter();

    constructor(
        private userService: UserService
    ) {
        this.userService.getUsers().subscribe(users => {
            const alreadySelected = {}
            if (this.selectedUsers) {
                this.selectedUsers.map(user => alreadySelected[user.id] == true)
            }
            users.forEach(user => {
                this.users.push({
                    selected: alreadySelected[user.id] ? true : false,
                    model: user
                })
            })
        });
    }

    selectUser(user: UserSelection) {
        if (user.selected) {
            user.selected = false;
            this.selectedUsers = this.selectedUsers.filter(curUser => user.model.id != curUser.id)
            return
        }
        user.selected = true;
        this.selectedUsers.push(user.model)
    }
}