import type { Collection } from 'tinacms'

export const reviewsCollection: Collection = {
    name: 'reviews',
    label: 'Avis',
    path: 'src/content/reviews',
    format: 'md',
    fields: [
        {
            name: 'author',
            label: 'Auteur',
            type: 'string',
            required: true,
        },
        {
            name: 'author_info',
            label: "Infos sur l'auteur",
            type: 'string',
        },
        {
            name: 'content',
            label: 'Avis de l’auteur',
            type: 'string',
            ui: {
                component: 'textarea',
            },
        },
        {
            name: 'publishDate',
            label: 'Date',
            type: 'datetime',
            ui: {
                dateFormat: 'DD/MM/YYYY',
            },
        },
        {
            name: 'featured',
            label: "Mis en avant sur la page d'accueil",
            type: 'boolean',
        },
    ],
}
