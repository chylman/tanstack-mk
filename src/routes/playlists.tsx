import { createFileRoute } from '@tanstack/react-router'
import {Playlists} from "../components/playlists/Playlists";

export const Route = createFileRoute('/playlists')({
  component: PlaylistsPage,
})

function PlaylistsPage() {
  return <div>
    <Playlists/>
  </div>
}
