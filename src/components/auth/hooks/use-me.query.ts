import {useQuery} from "@tanstack/react-query";
import {requestWrapper} from "../../../shared/api/tanstack-query-request-wrapper";
import {client} from "../../../shared/api/client";

export const useMeQuery = () => useQuery({
        queryKey: ['auth'],
        queryFn: async () => requestWrapper(client.GET('/auth/me', {

        })),
        retry: false
    })
