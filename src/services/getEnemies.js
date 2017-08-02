import axios from "axios";
import {turnApiObjIntoArray} from "../utils/turnApiObjIntoArray";

export function getEnemies() {
    return axios.get('http://localhost:3005/all')
        .then((response)=>{
            return turnApiObjIntoArray(response.data)
        })
}

