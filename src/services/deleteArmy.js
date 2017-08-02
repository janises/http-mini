import axios from "axios";

export function deleteArmy(shortname, id){
    return axios.delete(`http://localhost:3005/${shortname}/${id}`)
        .then((response) => {
            return response.data
        })
}