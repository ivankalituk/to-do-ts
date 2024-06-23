export interface TaskList {
    name: string;
    type: string;
    additional: string
}

export interface UpperTask {
    task: string,
    check: boolean,
    id: number
}

export interface SecondaryTaskInterface {
    task: string,
    check: boolean,
    id: number,
    fatherId: number
}