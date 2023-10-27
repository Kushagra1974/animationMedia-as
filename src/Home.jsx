import {useEffect,useState} from "react"
import { useNavigate } from "react-router-dom"
import {v4 as uuidv4 } from "uuid"
import Row from "./Row"

const intialObj = {
    category :"", subCategory:"" , product:"" , image:"" , price : "", discount:"" ,objId :uuidv4()
}

function Home() {
    const navigate = useNavigate()
    const [globalData ,setGlobalData] = useState([intialObj]);
    const [total,setTotal] = useState(0);
    const [isPressed ,setIsPressed] =useState(false);
    useEffect(()=>{
        const isLogedIn = JSON.parse(localStorage.getItem('logedin'))
        if(isLogedIn === null || !isLogedIn){
            return navigate("/");
        }
    },[navigate])
    useEffect(()=>{
        setIsPressed(false);
    },[globalData])

    console.dir(globalData)

    const getData = (obj)=>{
        const {data , remove} = obj;
        
        console.log(data,remove)
        

        if(remove === null){
            
            setTotal((prev)=>{
                return Number(prev) + Number(data.finalprice)
            })
            
            setGlobalData((prev)=>{
                const updatedObject = data;
                const newObject = { ...intialObj, objId: uuidv4() };
                const fistPart = prev.slice(0, -1) 
                const arr = [...fistPart, updatedObject , newObject];
               
                return arr
            })
        }
        else{
            //todo remove the data
            setGlobalData((prev)=>{
                return prev.filter(ob =>ob.objId !== remove.objId)
            })
        }
    }

    return (<div>
        {globalData.map((dt,i)=>{
            return <Row key={dt.objId} objId={dt.objId} s_No={i+1} provideData={getData} categoryInti ={dt.category} subCategoryInti={dt.subCategory} productInti={dt.product} imageInti={dt.image} priceInti={dt.price} discountInti={dt.discount} />
        })}

        
        <p>Total Final Price <span>{isPressed?total:null}</span></p>
        <button onClick={()=>{setIsPressed(true)}}>Submit</button>
    </div>)
}

export default Home