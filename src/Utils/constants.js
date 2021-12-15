export const API_BASE_URL = 'https://wizeline-academy.cdn.prismic.io/api/v2';

export const resourceSpecs = {
    product: [
        {
            operator: 'at',
            field: 'document.type',
            value: 'product'
        }
    ],
    category: [
        {
            operator: 'at',
            field: 'document.type',
            value: 'category'
        }
    ],
    banner: [
        {
            operator: 'at',
            field: 'document.type',
            value: 'banner'
        }
    ],
    featuredProduct: [
        {
            operator: 'at',
            field: 'document.type',
            value: 'product'
        },
        {
            operator: 'at',
            field: 'document.tags',
            value: ['Featured']
        }
    ]
};