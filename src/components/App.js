import '../styles/App.css';
import React,{useState, useEffect} from 'react';

const Loader = () => <div id="loader">Loading...</div>

const App = () => {
  const [data,setData] = useState("");
  const [loading,setLoading] = useState(true)
 
//   const makeURL = async (type) =>{
//     const data = await fetch(`https://www.boredapi.com/api/activity?type=${type}`)
//     const response = await data.json();
//     setLoading(false)
//     setData(response.activity)
//   }
  
  const makeURL = (type) => {
    fetch(`https://www.boredapi.com/api/activity?type=${type}`
    ).then((resp)=>{
      return resp.json()}).then((dat)=>{
      setLoading(false);
      setData(dat.activity);
    })
  };
  
  useEffect(()=>{
    makeURL("education")
  },[])

  const handleR =()=>{
    setLoading(true)
    makeURL("recreational")
  }
  const handleE =()=>{
    setLoading(true)
    makeURL("education")
  }
  return (
    <div id="activity">
      {loading ? Loader() : data}
      <br />
      <button id="btn-recreation" onClick={handleR}>Recreational</button>
      <button id="btn-education" onClick={handleE}>Education</button>
    </div>
  )
}


export default App;
