export class Experience {
    name: string;
    position: string;
    description: string;
    jobs: Job[];
}

export class Job {
    name: string;
    dates: string;
    description: string;
    id: number;
    attributes: JobAttribute[];
}

export class JobAttribute {
    type: string;
    name: string;
    url: string;
}
