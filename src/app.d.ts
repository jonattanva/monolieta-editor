// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {}

declare namespace Monolieta {
    type Entity = {
        id: string;
    };

    type Entities = Entity[];

    type Hash = {
        token: string;
    };

    type Label = {
        createdAt: number;
        updatedAt: number;
        name: string;
        color: string;
    } & Entity &
        Hash;

    type Labels = Label[];

    type Resource = {
        createdAt: number;
        updatedAt: number;
        source: File | string;
        name: string;
        size: number;
        type: string;
    } & Entity &
        Hash;

    type Resources = Resource[];

    type Option = {
        label: string;
        value: string;
    };

    type Options = Option[];

    type Group = {
        label: string;
        value: string;
        options: Options;
    };

    type Groups = Group[];

    type Index = { [key in string]: any };

    type Reader = {
        content: any;
    };

    type LabelReader = {
        columns: Monolieta.Options | Monolieta.Groups;
    } & Reader;

    type Ref = {
        body?: string | null;
        enabled: boolean;
        property: string;
    };

    type Import = {
        content: [] | Index;
        properties: Options | Groups = [];
        ref: { [key in string]: Ref };
        values: { [key in string]: Option | Group };
    };

    type Size = number | 'auto';
    type Direction = 'horizontal' | 'vertical';
}
