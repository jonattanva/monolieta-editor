export type Entity = {
    id: string;
};

export type Entities = Entity[];

export type Hash = {
    token: string;
};

export type Resource = {
    source: File | string;
} & Entity &
    Hash;

export type Resources = Resource[];

export type Label = {
    color: string;
    name: string;
    resources: Entities;
} & Entity;

export type Labels = Label[];

export type Sortable = 'asc' | 'desc';
