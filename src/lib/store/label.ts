import color from '$lib/color';
import createFile from '$lib/file';
import label from '$lib/config/label.json';
import { Search } from 'monolieta-search';
import { get, writable } from 'svelte/store';
import { nanoid } from 'nanoid';

const client = new Search();

const jsonTemplate = `{ 
    "labels": [%content%],
    "version": 1
}`;

const values = writable<Monolieta.Labels>([]);

function index(value: Monolieta.Label) {
    client.index(value.token, value.name);
    client.index(value.token, value.color);
}

export function template(name: string = '') {
    return {
        id: nanoid(),
        createdAt: Date.now(),
        updatedAt: Date.now(),
        name: name,
        color: color(),
        token: nanoid()
    };
}

export default {
    init: (value: Monolieta.Labels) => {
        values.update(() => {
            value.forEach((current) => {
                if (current.token) {
                    current.token = nanoid();
                }
                index(current);
            });
            return value;
        });
    },

    add: (value: Monolieta.Label) => {
        values.update((previous) => [value, ...previous]);
    },

    duplicate: (value: Monolieta.Label) => {
        const current = {
            ...value,
            id: nanoid(),
            createdAt: Date.now(),
            updatedAt: Date.now(),
            token: nanoid()
        };

        index(current);
        values.update((previous) => {
            return [current, ...previous];
        });
    },

    remove: (value: Monolieta.Label) => {
        values.update((previous) => {
            const index = previous.findIndex((row) => {
                return row.id === value.id;
            });

            if (index >= 0) {
                previous.splice(index, 1);
                return [...previous];
            }

            return previous;
        });
    },

    set: (value: Monolieta.Label) => {
        values.update((previous) => {
            const current = previous.find((row) => {
                return row.id === value.id;
            });

            if (current) {
                current.updatedAt = Date.now();
                current.name = value.name;
                current.color = value.color;
                current.token = nanoid();

                index(value);
            }

            return [...previous];
        });
    },

    search: (query: string): Monolieta.Labels => {
        const current = get(values);
        const criteria = query.trim();

        if (criteria.length === 0) {
            return current;
        }

        const results: Monolieta.Label[] = [];
        client.search(criteria).forEach((key) => {
            const item = current.find((label) => {
                return label.token === key;
            });

            if (item) {
                results.push(item);
            }
        });

        return results;
    },

    sort: (callback: (a: Monolieta.Label, b: Monolieta.Label) => number) => {
        values.update((previous) => {
            previous.sort(callback);
            return [...previous];
        });
    },

    subscribe: (callback: (values: Monolieta.Labels) => void) => values.subscribe(callback),

    export: (format: string, empty: boolean = true) => {
        let content = '';
        let template = jsonTemplate;
        let type = 'application/json';

        const whiteList = label.whitelist;

        if (format === 'csv') {
            type = 'text/csv';
            template = '%content%';
            content = whiteList.join(',').concat('\n');
        }

        const collections = get(values);
        for (let index = 0; index < collections.length; index++) {
            const element = collections[index];
            const item: { [key: string]: string | number } = {};

            if (!empty && element.name.trim().length === 0) {
                continue;
            }

            Object.keys(element)
                .filter((key) => whiteList.includes(key))
                .forEach((key: string) => {
                    item[key] = element[key as keyof Monolieta.Label];
                });

            switch (format) {
                case 'csv': {
                    content += Object.keys(item)
                        .map((column) => item[column])
                        .join(',')
                        .concat('\n');
                    break;
                }
                case 'json': {
                    content += JSON.stringify(item).concat('\n');
                    break;
                }
            }
        }

        createFile(
            new Blob([template.replace('%content%', content)], {
                type: type
            })
        );
    }
};
