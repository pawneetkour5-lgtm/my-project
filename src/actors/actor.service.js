import mongoose from "mongoose";
export const createActorService = async (data) => {
    const actors = await mongoose.connection.db.collection("actors").insertOne({
        name: data.name
        

    })
    return actors
}

export const getActorService = async () => {
    const result = await mongoose.connection.db.collection("actors").find().toArray()


    return result
}


export const deleteActorService= async (id)=>{
    const result = await mongoose.connection.db.collection("actors").deleteOne({
        _id: new mongoose.Types.ObjectId(id)
    })
}

export const updateActorService = async (id,data) => {
    const result = await mongoose.connection.db.collection("actors").updateOne({
        _id: new mongoose.Types.ObjectId(id)
    },{
        $set:{
            ...data
        }
    })
}

