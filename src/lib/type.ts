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

export enum Edge {
    E = 'e-resize',
    N = 'n-resize',
    NE = 'ne-resize',
    NW = 'nw-resize',
    S = 's-resize',
    SE = 'se-resize',
    SW = 'sw-resize',
    W = 'w-resize'
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

export type Size = {
    width: number;
    height: number;
};

export type Axis = {
    x: number;
    y: number;
};

export type Rect = Axis & Size;
