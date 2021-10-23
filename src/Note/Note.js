setNote((previousValue)=>{
            
    if(accessName==="title")
    {
        return{
            title:accessValue,
            content:previousValue.content
        }
    }
    else if(accessName==="content")
    {
        return{
            title:previousValue.title,
            content:accessValue
        }
    }

})