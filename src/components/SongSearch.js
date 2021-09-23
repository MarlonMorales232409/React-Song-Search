import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { Loader } from "./Loader";
import { SongDetails } from "./SongDetails";
import { SongForm } from "./SongForm";

export const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      console.log(search)
      const {artist, song} = search;

      let artistUrl = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      console.log(artistRes);
      console.log(songRes);

      setBio(artistRes);
      setLyric(songRes);
      setLoading(false)
    };
    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    setSearch(data);
  };

  return (
    <div>
      <h1>Song Search</h1>
      <SongForm handleSearch={handleSearch} />
      {loading && <Loader />}
      <SongDetails search={search} lyric={lyric} bio={bio} />
    </div>
  );
};
