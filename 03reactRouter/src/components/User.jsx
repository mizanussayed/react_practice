import { useParams } from "react-router-dom"

export default function User(){
    const {userId} = useParams()
    return(
        <div>
        <p className="text-center text-lime-50 py-3 bg-gray-700">user id: {userId}</p>
        </div>
    )
}