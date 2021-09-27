function validate(input)
{
    input=String(input);
    
    var valid=true;
    if(input.length !==6)
    {
        valid=false;
    }
    if(input[5]==7)
    {
       
         valid=false;
    }
    return valid;
}
function getResponse(input)
{
  
    if(validate(input)==true)
    {
        var response="";
        if(input==="321420")
        {
             response="ok"
        }
        else
        {
            response="no"
     
        }
        return response;
    }
    else
    {  
       return "invalid"
    }
   
}
module.exports = {
    getResponse
 }