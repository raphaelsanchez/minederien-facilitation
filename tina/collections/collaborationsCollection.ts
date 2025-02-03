import type { Collection } from 'tinacms'

export const collaborationsCollection: Collection = {
    name: 'collaborations',
    label: 'Collaborations',
    path: 'src/content/collaborations',

    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
        },
        {
            type: 'string',
            name: 'slug',
            label: 'Slug',
        },
        {
            type: 'string',
            name: 'description',
            label: 'Description',
        },
        {
            type: 'datetime',
            name: 'publishDate',
            label: 'Publish Date',
            ui: {
                dateFormat: 'DD/MM/YYYY',
            },
        },
        {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
        },
    ],
}
