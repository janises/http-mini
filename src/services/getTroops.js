import axios from "axios";


export function getTroops() {
    return axios.get("http://localhost:3005/defenses")
        .then((response)=>{
            return response.data
        })
}