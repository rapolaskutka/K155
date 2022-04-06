import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Exhibit = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = useParams();
    fetch('/api/v1/page/' + params.exhibitId)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  console.log(data);
  console.log(error);
  console.log(loading);
  return (
    <div>
      {loading && <div>A moment please...</div>}
      {error && <div>{`There is a problem fetching the post data - ${error}`}</div>}
      <p>{data.image_name}</p>
      <p>{data.disc}</p>
    </div>
  );
};

export default Exhibit;
