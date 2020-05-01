export interface Experience {
    name: string;
    position: string;
    description: string;
    // jobs: Job[];
}

export interface Job {
    name: string;
    dates: string;
    description: string;
    id: number;
    // attributes: JobAttribute[];
}

export interface JobAttribute {
    type: string;
    name: string;
    url: string;
}
