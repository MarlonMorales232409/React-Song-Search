import React, { useState } from 'react';

const initial = {
  artist: "",
  song: ""
};


export const SongForm = ({handleSearch}) => {

  const [form, setForm] = useState(initial);

  const handleChange = (e)=> {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = (e)=> {
    e.preventDefault();

    if(!form.song || !form.artist){
      alert("Faltan datos para poder realizar la busqueda");
      setForm(initial);
      return;
    }else{
      handleSearch(form);
      setForm(initial);
      return;
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input type="text" name="artist" placeholder="Artista" value={form.artist} onChange={handleChange}/>
        <input type="text" name="song" placeholder="Cancion"value={form.song} onChange={handleChange}/>
        <input type="submit" value="Buscar"/>
      </form>
    </div>
  )
}
