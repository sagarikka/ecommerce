import { EachCard } from "./eachCard"
import "../App.css"
import { useState } from "react";
import { Link } from 'react-router-dom'; 
import Boots from "../helper/Boots";


export function Card(){
    const [page,setpage]=useState(1);
   
    const setPageNumber=(currentPage)=>{
        console.log(currentPage)
        if(currentPage>=1 && currentPage<=Math.ceil(Boots.length/3) && currentPage!==page ){
        setpage(currentPage)
        }
    }

    console.log(page)
   
    console.log(Boots)
   
    return(
        <div className="flex flex-col items-center justify-center">
        <div className="w-full product  overflow-x-hidden" > {/* Adjust width here as needed */}
           
            
            {Boots.slice(page*3-3,page*3).map((boot, index) => (
                <Link to={`/product/${boot.id}`} key={boot.id}>
                        <EachCard
                          
                            image={boot.image}
                            bootName={boot.bootName}
                            price={boot.price}
                        />
                </Link>
                    ))}
        </div>
            <div className="flex justify-center items-center pagination">
                <span onClick={()=>{setPageNumber(page-1)}} className={page>1? " ":"opacity-0"}>◀️</span>
                {[...Array(Math.ceil(Boots.length/3))].map((_,i)=>{
                    return <span key={i}  className={`hover:bg-gray-400 ${page === i + 1 ? "bg-black text-white" : "" }`} onClick={()=>setPageNumber(i+1)}>{i+1}</span>
                })}
                <span onClick={()=>{setPageNumber(page+1)}} className={`hover:bg-gray-400 ${page<Math.ceil(Boots.length/3) ?"": "opacity-0"}`}>▶️</span>
            </div>
           
        
    </div>
    )
}
