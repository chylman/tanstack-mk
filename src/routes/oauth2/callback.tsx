import {createFileRoute} from '@tanstack/react-router'
import {useEffect} from "react";

export const Route = createFileRoute('/oauth2/callback')({
    component: RouteComponent,
    validateSearch: (search: Record<string, unknown>) => {
        return {
            code: search.code || ''
        }
    },
})

function RouteComponent() {
    const { code } = Route.useSearch()

    useEffect(() => {
        if (code) {
            window.opener.postMessage({code}, "http://localhost:5173")
        }
        window.close()
    }, [code])


    return <div>login...</div>
}
