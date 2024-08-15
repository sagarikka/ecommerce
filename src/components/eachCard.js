export function EachCard({image,bootName,price}){
    //
    return(
        <div className="flex flex-col w-3/4  p-4 pb-4 bg-gray-200 hover:bg-gray-300  m-2 border border-solid border-2 border-gray-300">
       
        <img src={image} alt="boot"/>
        <div className="font-bold  ">{bootName}</div>
        <div>⭐⭐⭐⭐⭐</div>
        <div className="font-bold ">{price}</div>
    </div>
    )
}