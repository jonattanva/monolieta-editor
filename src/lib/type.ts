export type Entity = {
    id: string;
};

export type Entities = Entity[];

export type Hash = {
    token: string;
};

export type Label = {
    createdAt: number;
    updatedAt: number;
    name: string;
    color: string;
} & Entity &
    Hash;

export type Labels = Label[];

export type Resource = {
    createdAt: number;
    updatedAt: number;
    source: File | string;
    name: string;
    size: number;
    type: string;
} & Entity &
    Hash;

export type Resources = Resource[];

export type Option = {
    label: string;
    value: string;
};

export type Options = Option[];

export type Group = {
    label: string;
    value: string;
    options: Options;
};

export type Groups = Group[];
