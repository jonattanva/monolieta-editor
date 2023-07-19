export type Sortable = 'asc' | 'desc';

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
    source: File | string;
    labels: Labels;
} & Entity;

export type Resources = Resource[];
