import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {UserBlock} from "./components/auth/UserBlock";
import {Playlists} from "./components/playlists/Playlists";

export function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <UserBlock/>
            </div>

            <hr/>
            <Playlists></Playlists>
            <ReactQueryDevtools></ReactQueryDevtools>
        </QueryClientProvider>
    )
}

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            refetchOnWindowFocus: false,
            refetchOnMount: false
        }
    }
})

