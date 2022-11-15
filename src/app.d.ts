// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {}

declare namespace Monolieta {
    type Entity = {
        id: string;
    };

    type Label = {
        createdAt: number;
        updatedAt: number;
        name: string;
        color: string;
        token: string;
    } & Entity;

    type Labels = Label[];

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

    type Index = { [key in string]: any };
}
