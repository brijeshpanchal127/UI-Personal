// import React, { useEffect, useState } from "react";



// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(async () => {
//     const response= await fetch(url);
//     const data= await response.json();
//     const [item] = data.results
//     console.log(data)
//     setData(item);
//     setLoading(false);  
//   });
//   return {data,loading}
// }


// const FetchData = () =>{

// const {data,loading}=useFetch("https://api.randomuser.me/")
// console.log("data",data)


//   return (
//     <div>
//      {loading ? <div>loading.....</div> : <div>{data.results.name.first}</div>}
//     </div>
//   );

// }

// export default FetchData;
