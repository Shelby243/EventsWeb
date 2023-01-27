import Image from "next/image"
import Link from "next/link"
export const HomePage=({data})=>{
    return (
  <div className="home-body">
    {data.map((ev)=>(
      <Link  key={ev.id} href={`/events/${ev.id}`} passHref legacyBehavior>
    <a className="card" href={`/events/${ev.id}`} >
      <div className="image">
         <Image alt={ev.title} width={480} height={300} src={ev.image}/> 
      </div>
       
       <div className="content">
           <h2>{ev.title} </h2>
           <br/>
           <p>{ev.description} </p> 
       </div>
      
    </a>
    </Link>
    ))}
  </div>
  )
}