import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-expect-error I'll fix this
    setTimeout(() => resolve(import('./MainPage')), 1500)
}) )


