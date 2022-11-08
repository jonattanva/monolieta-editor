// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
    // interface Locals {}
    // interface PageData {}
    // interface Error {}
    // interface Platform {}
}

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
        name: string;
        enabled: boolean;
    };

    type Import = {
        columns: Options | Groups = [];
        ref: { [key in string]: Ref };
        rows: any[];
        values: { [key in string]: Option };
    };

    type Index = { [key in string]: any };
}
