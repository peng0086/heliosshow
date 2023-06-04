var ctx, thisImage;
$(function(){
    document.getElementById("current_date").innerHTML = Date();
    $("[type='date']").on("change",showDate);
    ctx=$("#myCanvas")[0].getContext("2d");
});

$(document).ready( function() {
    var now = new Date();
    var month = (now.getMonth() + 1);               
    var day = now.getDate();
    if (month < 10) 
        month = "0" + month;
    if (day < 10) 
        day = "0" + day;
    var today = now.getFullYear() + '-' + month + '-' + day;
    $('#datePicker').val(today);
});

function showDate(){
    var thisDate=this.value;
    thisDate=thisDate.replace(/-/g,"");
    thisImage=new Image();
    thisImage.src="../images/flipClockNumbers.png";
    thisImage.onload=function() {
        for(var x=0;x<thisDate.length;x++){
            ctx.drawImage(thisImage, thisDate[x] *80, 0, 90, 130, 60*x, 0, 60, 100);
        }
    };
}

function changeBodyBg(){
    
    document.body.style.background = this.value;
}