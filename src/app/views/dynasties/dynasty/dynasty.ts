export interface IDynastyWeek {
    week: number;
    home: boolean;
    opponent: string;
    ourScore: number;
    theirScore: number;
    link: string;
    result: string;
    description: string;
}

export interface IDynastyYear {
    id: number;
    team: string;
    weeks: IDynastyWeek[];
}

export interface IDynastyMark {
    id: number;
    name: string;
}

export interface IDynasty {
    id: number;
    name: string;
    type: number;
    description: string;
}