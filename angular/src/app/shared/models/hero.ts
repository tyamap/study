export class Hero {
  key: string;
  name: string;
  skill: string;
  description: string;

  constructor(key: string, name: string, skill: string, description: string) {
    this.key = key;
    this.name = name;
    this.skill = skill;
    this.description = description;
  }
}
