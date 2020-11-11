export interface IDynastyWeek {
    id: number;
    isHome: boolean;
    opponent: string;
    yourScore: number;
    theirScore: number;
    link: string;
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