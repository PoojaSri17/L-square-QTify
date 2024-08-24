import React, { useEffect, useState } from "react";
import Section from "../Section/Section";
import { fetchNewAlbum } from "../../api/api";

const NewAlbumsSection = () => {
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchNewAlbum();
      setNewAlbums(data);
    };

    fetchData();
  }, []);

  return (
    <Section title="New Albums" data={newAlbums} type="album" />
  );
};

export default NewAlbumsSection;
