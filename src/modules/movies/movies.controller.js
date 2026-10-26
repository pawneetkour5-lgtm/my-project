import { createMovieService ,deleteMovieService,getMovieService, updateMovieService} from "./movies.service.js";
export const createMovieController=async(req,res)=>{
    const movie=await createMovieService(req.body)
    res.json({
        status:"ok",
        movie:movie
    })
}

export const getMovieController =async(req,res) =>{
    const movies= await getMovieService();            
    return res.json({
        status:"ok",
        message:"movies fetched",
        movies:movies
    })

}

export const deleteMovieController =async (req, res) => {
   await deleteMovieService(req.query.id)
    res.json({ status: "OK", message: "Movie Deleted", })
}
 export const updateMoviesBycontroller = async (req,res) => {
   await updateMovieService(
    req.query.id,
    req.body
   
  );
  res.json({
     status:"ok",
        message:"movies updated",
  })
};