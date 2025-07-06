import {useMeQuery} from "../auth/hooks/use-me.query";
import {useQuery} from "@tanstack/react-query";
import {requestWrapper} from "../../shared/api/tanstack-query-request-wrapper";
import {client} from "../../shared/api/client";

export function Playlists() {
    const query = useQuery({
        queryKey: ['playlists'],
        queryFn: async () => requestWrapper(client.GET('/playlists'))
    })

    const meQuery = useMeQuery()

    if (query.isPending) {
        return <div>Loading...</div>
    }
    if (query.isError) {
        return <div>Error...</div>
    }
    return (
        <>
            {!meQuery.data && <CreatePlaylist/>}

            <ul>
                {query.data.data.map(p => (<li key={p.id}>{p.attributes.title}</li>))}
            </ul>
        </>
    )
}

function CreatePlaylist() {
    return <div>CreatePlaylist</div>
}
