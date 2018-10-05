import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from './user';
import { USERS } from './mock-user';

@Injectable({
	providedIn: 'root'
})

export class DataUsersService {

	constructor(){}

	getAllUsers(): Observable<User[]>{
		return of(USERS);
	}

	getCountOfUsers(): number{
		return USERS.length;
	}

	getRepartitionGenre(gender: number): string{
		let count = this.getCountOfUsers();
		let gen = this.getCountOfGender(gender);

		return ((gen/count)*100).toString() + "%";
	}

	getMoyenneAge():number{
		var somme = 0;
		for (let user of USERS){
			somme += this.convertDateToAge(user.dateofbirth);
		}
		return somme/this.getCountOfUsers();
	}

	private getCountOfGender(gender: number): number{
		var count = 0;
		for (let user of USERS){
			if (user.gender == gender) {
				count++;
			}
		}
		return count;
	}

	private convertDateToAge(date: number): number{
		let birth = new Date(date);
		let timeDiff = Math.abs(Date.now() - birth.getTime());
		return Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
	}

}