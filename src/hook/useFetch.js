import { useState, useEffect } from "react";

const useFetch = (URL) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return [data, setData];
};

export default useFetch;
