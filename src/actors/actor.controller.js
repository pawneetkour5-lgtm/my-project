import { createActorService, deleteActorService, getActorService,updateActorService} from "./actor.service.js"

export const createActorController=async(req,res)=>{
    const actors =await createActorService(req.body)
    res.json({
        status:"ok",
        name:"name"
    })
}
export const getActorController =async(req,res) =>{
    const actors= await getActorService();            
    return res.json({
        status:"ok",
        message:"actors fetched",
        data:actors
    })

}

export const deleteActorController = async(req,res)=>{
    await deleteActorService(req.query.id)
    res.json({ status:"deleted",message:"actor deleted"})
}

export const updateActorController = async (req,res) => {
   await updateActorService(
    req.query.id,
    req.body
   
  );
  res.json({
     status:"ok",
        message:"actor updated",
  })
};