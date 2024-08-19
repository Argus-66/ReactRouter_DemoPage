import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/argus-66")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white text-3xl p-4">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300}/>
      <h2 className="p-4">{data.login}</h2>
    </div>
  );
}

export default Github;
