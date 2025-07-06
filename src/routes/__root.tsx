import {createRootRoute, Link, Outlet} from '@tanstack/react-router'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {UserBlock} from "../components/auth/UserBlock";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            refetchOnWindowFocus: false,
            refetchOnMount: false
        }
    }
})


export const Route = createRootRoute({
    component: () => (
        <>
            <QueryClientProvider client={queryClient}>
                <div className="p-2 flex gap-2">
                    <Link to="/" className="[&.active]:font-bold">
                        Home
                    </Link>{' | '}
                    <Link to="/playlists" className="[&.active]:font-bold">
                        Playlists
                    </Link>{' | '}
                    <UserBlock />
                </div>
                <hr/>
                <Outlet/>
                <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        </>
    ),
})
