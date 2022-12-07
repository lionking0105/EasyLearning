

const createCourse = async(req,res) =>{
    const { Category, Description, Rating, Students, Teacher, Video } = req.body;
    try {
        const newCourse = await Course.create({
            Category, 
            Description, 
            Rating, 
            Students, 
            Teacher, 
            Video 
        })
        res.status(201).json(newCourse).send({"msg" : "Course created"})
    } catch (error) {
        res.status(400).json(error);
    }
}


export default createCourse;