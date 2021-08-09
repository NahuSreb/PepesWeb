import instance from "../Config/axios"
export const getAll = (query="") =>{
return instance.get("items"+query)
}

export const getById = (id) =>{
    return instance.get("items/"+id)
}