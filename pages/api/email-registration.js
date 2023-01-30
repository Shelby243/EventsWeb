import path from 'path'
import fs from 'fs'
import AllEvents from '@/src/components/events/events-page'


function buildPath(){
   return  path.join(process.cwd(), 'data','data.json')
}

function extractData(filePath){
    const jsonData=fs.readFileSync(filePath)
    const data= JSON.parse(jsonData)

    return data
}


export default function handler(req,res){
    const {method}=req
    //Access our data
    //extract our data(AllEvents)
        //res 404 if tere are no AllEvents
        //AllEvents - loop through them and identify id the EventID
        // add the email into email_registered 
        // only if that email does not exist 
        //check the format of the email is OK


    const filePath=buildPath()
    const {events_categories, allEvents}=extractData(filePath)
    if(!allEvents){
        return res.status(404).json({
            status:404,
            message:"Events data not found"
        })
    }


    if(method==="POST"){
        const {email,eventId}=req.body
        if(!email | !email.includes('@')){
            res.status(422).json({
                message:"Invalid email address"
            })
            return
        }

        const newAllEvents=allEvents.map((ev)=>{
            if(ev.id===eventId){
                if(ev.emails_registered.includes(email)){
                    res.status(201).json({
                        message:'This email has already been registered'
                    })
                    return ev
                }
                return{
                    ...ev,emails_registered:[...ev.emails_registered,email]
                }
            }
            return ev
        })

        fs.writeFileSync(filePath,JSON.stringify({events_categories, allEvents:newAllEvents}))

        res
            .status(200)
            .json({
            message:`You has been registered successfully with the email:${email} ${'\n'} For 
            the event: ${eventId}`,
        })
    }
}