function compute()
{
    Boolean=false;
    var principal = document.getElementById("principal").value;
    if((principal==0)||(principal<0))
    {
        alert("Enter a Positive Number");
        document.getElementById("principal").focus()
        Boolean=true;
    }
    if(Boolean==false)
    {
    var rate=document.getElementById("rate").value;
    var years=document.getElementById("years").value;
    var interest=(principal*rate*years)/100;
    var year=(2020+parseInt(years));
    document.getElementById("box").innerHTML="If you deposit "+principal+"<br>at an interest rate of "+ rate+" % <br>You will receive an amount of "+interest+",<br>in the year "+year+".";
    }
}
function display()
{
    var val=document.getElementById("rate").value;
    document.getElementById("value").innerHTML=val;
}
