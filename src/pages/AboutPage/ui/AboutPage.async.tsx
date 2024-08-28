import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise(resolve => {

    // @ts-expect-error I'll fix this
    setTimeout(() => resolve(import('./AboutPage')), 1500)
}) )