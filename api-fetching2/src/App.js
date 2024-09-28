import './App.css';
import Axios from "axios";
import { useState} from "react";

// function App() {
//   const[name,setName]=useState("")
//   const[predictedAge,setPredictedAge]=useState({})
//   const fetchData=()=>{
//     Axios.get(`https:/api.agify.io/?name=${name}`).then((res)=>{
//       setPredictedAge(res.data);
      
//     })

//   }
//   return (
//     <div className="App">
//       <input placeholder='ex iqra..' onChange={(event)=>{setName(event.target.value)}}></input>
//       <button onClick={fetchData}>predict Age</button>
//       <h1>predicted name:{predictedAge.name}</h1>
//       <h1>predicted count:{predictedAge.count}</h1>
//       <h1>predicted age:{predictedAge.age}</h1>
     
//     </div>
//   );
// }                                                      
                                           //exercise for api-fetching

function App() {
  const[Excuse,setExcuse]=useState("");
  const fetchExcuse=(excuse)=>{
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then((res)=>{
      setExcuse(res.data[0].excuse)
    })
  }

  return (

    <div className="App">
      <h1>Generate An Execuse</h1>
      <button onClick={()=>{fetchExcuse("office")}}>office</button>
      <button onClick={()=>{fetchExcuse("party")}}>party</button>
      <button onClick={()=>{fetchExcuse("family")}}>family</button>
      <p>{Excuse}</p>
       </div>
  );
}
export default App;





