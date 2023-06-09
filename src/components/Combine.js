import React,{useState,useEffect} from 'react'
import "../index.css"
const getLocalData=()=>{
    const lists=localStorage.getItem("allEntries");
    if (lists){
        try{
      return JSON.parse(lists);
        }
        catch{
            return []
        }
    }
    else{
      return [];
    }
  };
const Combine = () => {
    const [title,settitle]=useState("")
    const [desc,setdesc]=useState("")
    const [date,setdate]=useState("")
    const [array,setArray]=useState([])
    const deleteAll=()=>{
        localStorage.clear()
        setArray([])
    }
    const deleteItem=(ind)=>{
        const update=array.filter((curElem)=>{
            return curElem.id!==ind
        })
        console.log(update)
        localStorage.setItem("allEntries",JSON.stringify(update))
        setArray(getLocalData())
    }
    const editItem=(ind)=>{
      const item_edited=array.find((curElem)=>{
        return curElem.id===ind;
      });
      const update=array.filter((curElem)=>{
        return curElem.id!==ind
    })
    localStorage.setItem("allEntries",JSON.stringify(update))
    setArray(getLocalData())
    setdate(item_edited.date)
    settitle(item_edited.title)
    setdesc(item_edited.desc)
    }
    const handleSubmit=()=>{
      if(title!==""&&desc!==""&&date!==""){
        const beta={
            id:new Date().getTime().toString(),
            title:title,
            date:date,
            desc:desc
        }
        if(beta){
            var Existing=getLocalData()
            Existing.push(beta)
            localStorage.setItem("allEntries",JSON.stringify(Existing))
            setArray(JSON.parse(localStorage.getItem("allEntries")))
            settitle("")
            setdesc("")
            setdate("")
          }
      }
      else{
        document.getElementById("check").innerHTML="Fill the form correctly!"
      }
    }
    useEffect(()=>{
        setArray(getLocalData())
    },[])
  return (
    <div className="total-container">
      <center>
    <div className="main-inputs">
      <h4 id="input-head">Enter Data!</h4>
      <input type="text" name="title" id="title" value={title} onChange={(e)=>{settitle(e.target.value)}} placeholder="title..."/>
      <input type="text" name="desc" id="desc" value={desc} onChange={(e)=>{setdesc(e.target.value)}} placeholder="desc..."/>
      <input type="date" name="date" id="date" value={date} onChange={(e)=>{setdate(e.target.value)}} placeholder="date..."/>
      <button type="submit" id="submit" onClick={()=>{handleSubmit()}}>Submit</button>
      <p id="check"></p>
    </div>
    <p className="tasks-head">YOUR TASKS ✍🏼</p>
    <div className="datas">  
    {
          array.map((ele)=>{
            return(
              <div className="single-task">
                <div className="status">
                <span className="task-date">{ele.date}</span>
                <p className="task-title">{ele.title}</p>
                </div>
                <div className='desc-div'>
                <p className="task-desc">{ele.desc}</p>
                </div>
                <div className='buttons'>
                <button type="submit" id="delete" onClick={()=>deleteItem(ele.id)}>Delete</button>
                <button type="submit" id="edit" onClick={()=>editItem(ele.id)}>Edit</button>
                </div>
              </div>
            )
          })
        }
    </div>
    <div className="deleteAll">
        {(array.length!==0)?
    <button type="submit" id="delete" onClick={()=>deleteAll()}>Delete All</button>
    :<p></p>
        }
    </div>
    </center>
    <footer className='footer'>
      <p className='footer-title'>Made With ❤️ by Aamri</p>
    </footer>
    </div>
  )
}

export default Combine
