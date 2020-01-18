import { runInThisContext } from 'vm';

export class Hero {
  id: number;
  name: string;
  skill: string;
  description: string;

  constructor(id: number, name: string, skill: string, description: string) {
    this.id = id;
    this.name = name;
    this.skill = skill;
    this.description = description;
  }
}
