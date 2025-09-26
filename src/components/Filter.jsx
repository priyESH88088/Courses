import React from "react";

function Filter({filterData, category,setCategory}){

    function handleClick(title){
    setCategory(title);
    }

return(
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto py-4 justify-center">{
        filterData.map((data)=>(
            <button className=" text-lg px-2 py-1 rounded-md font-medium bg-gray-600 text-white" key={data.id} 
            onClick={()=>handleClick(data.title)}
            >{data.title}</button>
        ))
        }</div>
)
}
export default Filter;
