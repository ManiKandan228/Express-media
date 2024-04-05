const userData=require("../data/initialData")
const fs = require("fs");

const getAllUserData=(request,response)=>{
    response.status(200).send({userData})
}

const getAllUserDataById=(request,response)=>{
    const userId=request.params.id;
    // let expectedUserData;
    // userData.map((user)=>
    // {
    //     if (user.id===userId)
    //     {
    //         expectedUserData=user
    //     } 
    // })
    let expectedUserData;
    console.log(request.user)
    if(expectedUserData)
        return response.status(200).send(expectedUserData);
    else
    {
        return response.status(200).send({mesage: `${userId}`})
    }
    // response.status(200).send({message: `User data of id ${userId}`})
}

const displayUserForm=(request,response)=>{
    response.status(200).render('userform')
}

const addUserData = (request, response) => {
    const formData = request.body;
    userData.push(formData);

    // Write the updated user data back to the file
    fs.writeFile("./data/initialData.js", `${JSON.stringify(userData)}`, (err) => {
        if (err) {
            console.error(err);
            return response.status(500).send({ message: "Failed to add user data" });
        }
        response.status(200).redirect('/api/v1/users');
    })
}

module.exports={getAllUserData,getAllUserDataById,displayUserForm,addUserData}