import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

const Exhibit = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const params = useParams();
  useEffect(() => {
    fetch('/api/v1/page/' + params.exhibitId)
      .then((response) => {
        if (!response.ok) {
          setNotFound(true);
        }
        return response.json();
      })
      .then((actualData) => {
        setData({
          code: actualData.code,
          disc: actualData.disc,
          imageName: actualData.image_name
        });
        console.log(actualData);
        setLoading(false);
      });
  }, []);
  if (notFound) return <NotFound />;
  return (
    <div>
      {loading ? (
        <div>A moment please...</div>
      ) : (
        <>
          <div>Image name: {data.imageName}</div>
          <div>Discription: {data.disc}</div>
        </>
      )}
    </div>
  );
};

export default Exhibit;
