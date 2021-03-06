import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve => setTimeout(resolve, 500))
            .then(() => this.getHeroes());
    }

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
}