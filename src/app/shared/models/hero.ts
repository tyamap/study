export class Hero {
  id: string;
  name: string;
  skill: string;
  description: string;

  constructor(id: string, name: string, skill: string, description: string) {
    this.id = id;
    this.name = name;
    this.skill = skill;
    this.description = description;
  }
}
