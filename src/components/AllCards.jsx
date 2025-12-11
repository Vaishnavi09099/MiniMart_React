

function AllCards({data}){
    
    return (
        <div className="mt-10 flex flex-wrap justify-around w-[80%] gap-10 mb-10">

            {data.map(singleItem => (
                 <div
                  key={singleItem.id}
                  className="bg-red-300 w-[25%] h-[500px] p-4 rounded-3xl shadow-xl"
                  
                  >
                <img src={singleItem.thumbnail} className="aspect-square-w-[100%] object-cover h-[60%] rounded-2xl bg-[#E9EEEE] shadow-xl" alt="" />
                <div className="flex items-center justify-between">
                <h2 className="text-left my-2 text-xl line-clamp-1">{singleItem.title}</h2>
                <p className="text-3xl">${singleItem.price}</p>
                </div>
                <p className="text-left line-clamp-1 lg:line-clamp-3 ">{singleItem.description}</p>
            </div>
           
            ))}
           
        </div>
    )
}

export default AllCards;