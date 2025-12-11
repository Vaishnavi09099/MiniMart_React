

function AllCards({data}){
    
    return (
        <div style={{display:"flex",flexWrap:"wrap",gap:"30px"}}>

            {data.map(singleItem => (
                 <div key={singleItem.id} style={{backgroundColor:"green",maxWidth:"350px",height:"400px",padding:"20px",overflow:"hidden"}}>
                <img src={singleItem.thumbnail} style={{width:"200px" ,height:"200px"}} alt="" />
                <h2>{singleItem.title}</h2>
                <p>${singleItem.price}</p>
                <p style={{opacity:"0.5"}}>{singleItem.description}</p>
            </div>
           
            ))}
           
        </div>
    )
}

export default AllCards;