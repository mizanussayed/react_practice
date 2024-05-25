import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function GitHub() {

//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/mizanussayed")
//       .then((res) => res.json())
//       .then((js) => setData(js));
//     console.log(data);
//   }, []);

const data = useLoaderData()

  return (
    <>
      <div className="text-center text-slate-950 p-4 m-4 bg-gray-700 text-3xl">
        <p>Name : {data.name}</p>
        <img
          className="text-center w-40"
          src={data.avatar_url}
          alt="github profile pic"
        />
      </div>
    </>
  );
}

export const githubDataLoader = async () => {
  const response = await fetch("https://api.github.com/users/mizanussayed");
  return response.json();
};
