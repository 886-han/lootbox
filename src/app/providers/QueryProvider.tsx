import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { PropsWithChildren } from 'react';

const cilent = new QueryClient();

export default function QueryProvider({children}: PropsWithChildren){
    return (
        <QueryClientProvider client={cilent}>
            {children}
        </QueryClientProvider>
    )
}