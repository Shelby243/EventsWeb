import Image from "next/image"
import Link from "next/link"
export const HomePage=({data})=>{
    return (
  <main >
    {data.map((ev)=>(
      <Link key={ev.id} href={`/events/${ev.id}`} passHref legacyBehavior>
    <a >
       <Image alt={ev.title} width={200} height={150} src={ev.image}/> 
      <h2>{ev.title} </h2>
      <p>{ev.description} </p> 
    </a>
    </Link>
    ))}
  </main>)
}