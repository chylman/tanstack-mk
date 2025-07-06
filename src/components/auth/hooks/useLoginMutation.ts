import {useMutation, useQueryClient} from "@tanstack/react-query";
import {client} from "../../../shared/api/client.ts";
import {requestWrapper} from "../../../shared/api/tanstack-query-request-wrapper";

export const useLoginMutation = (redirectUri: string) => {
    const qc = useQueryClient()

    const loginMutation = useMutation({
        mutationFn: (code: string) => requestWrapper(client.POST('/auth/login', {
            body: {
                code: code,
                accessTokenTTL: '1d',
                redirectUri: redirectUri,
                rememberMe: true
            }
        })),
        onSuccess: (data) => {
            debugger
            localStorage.setItem('musicfun-access-token', data.accessToken);
            qc.invalidateQueries({
                queryKey: ['auth']
            })
        }
    })

    return loginMutation
}
