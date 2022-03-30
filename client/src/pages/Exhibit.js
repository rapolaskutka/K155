import React from 'react';
import { useParams } from 'react-router-dom';

const Exhibit = () => {
  const params = useParams();
  return <div>exhibit with id: {params.exhibitId}</div>;
};

export default Exhibit;
