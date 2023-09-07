export enum Tool {
    Cursor = 'cursor',
    Hand = 'hand',
    Rect = 'rect'
}

export enum Theme {
    Dark = 'dark',
    Light = 'light'
}

export enum Sortable {
    asc = 'asc',
    desc = 'desc'
}

export type Entity = {
    id: string;
};

export type Entities = Entity[];

export type Label = {
    color: string;
    name: string;
    resources: Entities;
} & Entity;

export type Labels = Label[];

export type Resource = {
    source: File;
    labels: Labels;
} & Entity;

export type Resources = Resource[];

export type Option = {
    height: number;
    interval?: number;
    width: number;
};
