import { CHANGE_GAMEFIELD_SIZE } from "../constants";

export function changeGamefieldSize (size){
    return{
        type: CHANGE_GAMEFIELD_SIZE,
        gamfieldSize: size,
    }
}