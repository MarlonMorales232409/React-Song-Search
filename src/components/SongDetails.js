import { SongArtist } from "./SongArtist"
import { SongLiryc } from "./SongLiryc"

export const SongDetails = ({search, liryc, bio}) => {
  return (
    <div>
      <h2>Song Details</h2>
      <SongLiryc/>
      <SongArtist/>
    </div>
  )
}
