import {useMeQuery} from "./hooks/use-me.query.ts";
import {useEffect} from "react";
import {useLoginMutation} from "./hooks/useLoginMutation";

export const redirectUri = 'http://localhost:5173/oauth2/callback'

export function UserBlock() {
    const meQuery = useMeQuery()
    const loginMutation = useLoginMutation(redirectUri)

    useEffect(() => {
        const handlePostMessage = async (event: MessageEvent) => {
            if (event.origin === "http://localhost:5173") {
                const code = event.data.code
                loginMutation.mutate(code)
            }
        }

        window.addEventListener("message", handlePostMessage)

            return () => window.removeEventListener("message", handlePostMessage)
    })

    function loginHandler() {


        window.open(`https://oauth.apihub.it-incubator.io/realms/apihub/protocol/openid-connect/auth?client_id=spotifun&response_type=code&redirect_uri=${redirectUri}&scope=openid`, 'google', 'height=600,width=500')
    }


    if (meQuery.isPending) {
        return <span>Loading...</span>
    }

    if (meQuery.isError) {
        return <span><button onClick={loginHandler}>Login</button></span>
    }

    return <span>
            {meQuery.data.login}

    </span>
}
