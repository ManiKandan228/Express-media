const dataEntrylogger=(request,response,next)=>
{
    console.log("New Entry added")
    console.log(request.method)
    console.log(new Date());
    console.log(request.originalUrl);
    next()
}

module.exports=dataEntrylogger