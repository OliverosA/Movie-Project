import Movie from "./Movie";

export default class HorrorMovie extends Movie {
    jump_scares_count: number;
    ghosts: boolean;
    visions: boolean;

    constructor(
        name: string,
        director: string,
        language: string,
        running_time: number,
        year: number,
        jump_scares_count: number,
        ghosts: boolean,
        visions: boolean
    ) {
        super(name, director, language, running_time, year);
        this.jump_scares_count = jump_scares_count;
        this.ghosts = ghosts;
        this.visions = visions;
    }

    incrementJumpscares(){
        this.jump_scares_count += 1;
    }

    expectGhosts(): string {
        if (this.ghosts) return '👻';
        return '🙅🏻‍♂️';
    }

    expectVisions(): string {
        if (this.visions) return '🔮';
        return '🙅🏻‍♂️';
    }

    printHorrorMovie() {
        console.log(`
        ----------------------------
        Name: ${this.name}
        Year: ${this.year}
        Director: ${this.director}
        Language: ${this.language}
        Running Time: ${this.running_time}
        Jump Scares Count: ${this.jump_scares_count}
        Ghosts: ${this.expectGhosts()}
        Visions: ${this.expectVisions()}
        ----------------------------
        `);
    }
}