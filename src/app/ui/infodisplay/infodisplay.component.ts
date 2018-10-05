import { Component, OnInit, Input } from '@angular/core';
import { DataUsersService } from '../../data-users.service';

import { User } from '../../user';

@Component({
	selector: 'app-infodisplay',
	templateUrl: './infodisplay.component.html',
	styleUrls: ['./infodisplay.component.css']
})
export class InfodisplayComponent implements OnInit {

	@Input() typeInfo: string;
	users : User[];

	title: string;
	message: string;

	constructor(private userService: DataUsersService) { }

	ngOnInit() {
		this.userService.getAllUsers().subscribe(users => this.users = users);
		
		if (this.typeInfo === "populationTotale") {
			this.title = "Nombre total de profils";
			this.message = this.userService.getCountOfUsers().toString();
		} else if (this.typeInfo === "ageMoyen") {
			this.title = "Age moyen des utilisateurs";
			this.message = this.userService.getMoyenneAge() +" ans";
		} else if (this.typeInfo === "repartition") {
			this.title = "Répartition par sexe";
			this.message = this.userService.getRepartitionGenre(0) +" d'hommes "+ this.userService.getRepartitionGenre(1)+ " de femmes";
		}
	}
}
