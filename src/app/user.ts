enum Gender{
	male = 0,
	female
}

interface IProfile {
	id: number;
	dateofbirth: number;
	gender: Gender;
}

export class User implements IProfile{
	constructor(public id, public dateofbirth, public gender: Gender){
	}
}
