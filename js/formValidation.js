function namecheck()
{
    let name=document.getElementById("name").value
    let nm=null
     nm = name.trim()
   var letters = /^[A-Za-z]+$/;
   var spc=/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+[A-Za-z]*$/;
    document.getElementById("name").value = nm;
    if(nm==""||name==null)
    {
        document.getElementById("nmlabel").style.display="block"
        return false
    }
    else if(!isNaN(nm[0]))
    {
        document.getElementById("nmlabel").style.display="none"
        document.getElementById("nmlabel-01").style.display="block"
        return false
    }
    else if(nm.match(spc))
    {
        document.getElementById("nmlabel").style.display="none" 
        document.getElementById("nmlabel-01").style.display="none"  
        document.getElementById("nmlabel-02").style.display="block"
        return false
    }
    else{
        document.getElementById("nmlabel").style.display="none" 
        document.getElementById("nmlabel-01").style.display="none" 
        document.getElementById("nmlabel-02").style.display="none"
        return true

    }
}


function emailcheck()
{
    var val=document.getElementById("email").value
    var v=null
     v = val.trim()
    document.getElementById("email").value = v;
    if(v==""||val==null)
    {
        document.getElementById("el").style.display="block"
        return false
    }
    else if(!isNaN(v[0]))
    {
        document.getElementById("el-01").style.display="block"
        return false
    }


    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v))
  {
    document.getElementById("el-02").style.display="block"
    return false
  }
    // alert("You have entered an invalid email address!")
    // return (false)





    else{
        document.getElementById("el").style.display="none" 
        document.getElementById("el-01").style.display="none"
        document.getElementById("el-02").style.display="none" 
        return true

    }
}

function msgcheck()
{

    var val=document.getElementById("msg").value
    var v=null
     v = val.trim()
    document.getElementById("msg").value = v;
    var n=v.length
    console.log(n)
    if(v==""||val==null)
    {
        document.getElementById("ml").style.display="block"
        return false
    }
    else if(50>=n)
    {
        console.log(v.length)
        document.getElementById("ml-01").style.display="block"  
        return false      
    }
    else{
        document.getElementById("ml").style.display="none" 
        document.getElementById("ml-01").style.display="none"   
        return true

    }
}
