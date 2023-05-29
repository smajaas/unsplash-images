import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axios from 'axios';
const url =
  'https://api.unsplash.com/search/photos/?client_id=w63dMbPQJ1uwoaEB2APVpwIpCHVATeJ0AfGMLWnIK2w&query=office';

const Gallery = () => {
  const response = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const result = await axios.get(url);
      return result.data;
    },
  });
  console.log(response);
  return (
    <div>
      <h2>gallery</h2>
    </div>
  );
};

export default Gallery;
