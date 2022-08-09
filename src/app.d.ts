/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
    // interface Locals {}
    // interface Platform {}
    // interface Session {}
    // interface Stuff {}
}

declare namespace Monolieta {
    type Entity = {
        id: string;
    };

    type Entities = readonly Entity[];

    type Label = {
        id: string;
        createdAt: number;
        updatedAt: number;
        name: string;
        color: string;
        token: string;
    } & Entity;

    type Labels = readonly Label[];

    type Project = {
        id: string;
        name: string;
        labels: Label[];
    };

    type Direction = 'horizontal' | 'vertical';
}
