const pool = require("../../db");
const queries = require("./queries");



const getStudents = (req, res) => {
  pool.query(
    queries.getStudents, 
    (error, results) => {
       res.status(200).json({
         message:"Showing results",
         length: results.rows.length,
         data: results.rows,
         error: false
       });
  });
};

const getStudentById = (req, res) => {
  let id = req.params.id;
  pool.query(
    queries.getStudentById, 
    [id], 
    (error, results) => {
       res.status(200).json(results.rows);
  });
};

const addStudent = (req, res) => {
const { name, email, age, dob } = req.body;

  //check if email exists
  pool.query(
    queries.checkEmailExists, 
    [email], 
    (error, results) => {    
        if (results.rows.length) {
           res.status(201).send("Email already exists");
        }

    // add student to db
    else{
        pool.query(
            queries.addStudent,
            [name,email,age,dob],
            (error,results)=>{
               if(error) throw error
               res.status(201).send("successfully added students")
            }
        )
    }
  });
};

const deleteStudent = (req,res)=>{
  const id = req.params.id
      pool.query(
        queries.deleteStudent,
        [id],
        (error,result)=>{
          if(error) throw error
          res.status(200).send("removed successfully")
        }
      )
}


const updateStudent = (req,res)=>{
  const id = req.params.id
  const {name,email,age,dob} = req.body
  
   pool.query(
    queries.updateStudent,
    [name,id],
    (error,result)=>{
        if(error) throw error
        res.status(200).json({
           message:"Updated successfully",
         
        })
    }

    )
}



module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  deleteStudent,
  updateStudent
};
