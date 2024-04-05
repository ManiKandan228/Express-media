const express=require("express")
const app=express();
const PORT=3500;
const userRoute=require("./routes/userRoute")

app.set('view engine','ejs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(request,response)=>{
    response.status(200).send({message: "Server running"})
})

app.use('/api/v1/users',userRoute)
app.listen(PORT,console.log(`Server running at hhtps://localhost:${PORT}`));