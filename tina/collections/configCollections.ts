import type { Collection } from 'tinacms'

export const ConfigCollection: Collection = {
    label: 'Réglages',
    path: 'src/content',
    name: 'settings',
    format: 'json',
    ui: {
        global: true,
        allowedActions: {
            create: false,
            delete: false,
        },
    },
    fields: [
        {
            name: 'seo',
            label: 'SEO',
            type: 'object',
            fields: [
                { name: 'title', label: 'Titre', type: 'string' },
                { name: 'description', label: 'Description', type: 'string' },
                { name: 'author', label: 'Auteur', type: 'string' },
            ],
        },
        {
            name: 'socials',
            label: 'Réseaux sociaux',
            type: 'object',
            fields: [
                {
                    name: 'linkedIn',
                    label: 'LinkedIn',
                    type: 'string',
                    // @ts-ignore
                    placeholder: 'https://linkedin.com/in/YOUR_USERNAME',
                },
                {
                    name: 'instagram',
                    label: 'Instagram',
                    type: 'string',
                    // @ts-ignore
                    placeholder: 'https://instagram.com/YOUR_USERNAME',
                },
                {
                    name: 'bluesky',
                    label: 'Bluesky',
                    type: 'string',
                    // @ts-ignore
                    placeholder: 'https://bsky.app/profile/YOUR_USERNAME',
                },
                {
                    name: 'twitter',
                    label: 'X (ex Twitter)',
                    type: 'string',
                    // @ts-ignore
                    placeholder: 'https://twitter.com/YOUR_USERNAME',
                },
                {
                    name: 'facebook',
                    label: 'Facebook',
                    type: 'string',
                    // @ts-ignore
                    placeholder: 'https://facebook.com/YOUR_USERNAME',
                },
                {
                    name: 'youtube',
                    label: 'YouTube',
                    type: 'string',
                    // @ts-ignore
                    placeholder: 'https://youtube.com/channel/YOUR_USERNAME',
                },
                {
                    name: 'tiktok',
                    label: 'TikTok',
                    type: 'string',
                    // @ts-ignore
                    placeholder: 'https://tiktok.com/@YOUR_USERNAME',
                },
                {
                    name: 'pinterest',
                    label: 'Pinterest',
                    type: 'string',
                    // @ts-ignore
                    placeholder: 'https://pinterest.com/YOUR_USERNAME',
                },
                {
                    name: 'snapchat',
                    label: 'Snapchat',
                    type: 'string',
                    // @ts-ignore
                    placeholder: 'https://snapchat.com/add/YOUR_USERNAME',
                },
            ],
        },
        {
            name: 'navigation',
            label: 'Navigation',
            type: 'object',
            fields: [
                {
                    name: 'mainMenu',
                    label: 'Menu principal',
                    type: 'object',
                    list: true,
                    fields: [
                        {
                            name: 'label',
                            label: 'Label',
                            type: 'string',
                        },
                        {
                            name: 'url',
                            label: 'URL',
                            type: 'string',
                        },
                    ],
                    ui: {
                        itemProps: (item) => ({
                            label: item.label,
                        }),
                    },
                },
                {
                    name: 'footerMenu',
                    label: 'Pied de page',
                    type: 'object',
                    list: true,
                    fields: [
                        {
                            name: 'label',
                            label: 'Label',
                            type: 'string',
                        },
                        {
                            name: 'url',
                            label: 'URL',
                            type: 'string',
                        },
                    ],
                    ui: {
                        itemProps: (item) => ({
                            label: item.label,
                        }),
                    },
                },
            ],
        },
    ],
}
