function toggle()
{
    if(document.getElementById("on-off").value == "ON")
    {
        document.getElementById("on-off").value = "OFF";
        document.getElementById("on-off").style.backgroundColor = "red";
        document.getElementById("on-off").style.color = "white";
    }
    else
    {
        document.getElementById("on-off").value = "ON";
        document.getElementById("on-off").style.backgroundColor = "green";
        document.getElementById("on-off").style.color = "white";
    }
        
}