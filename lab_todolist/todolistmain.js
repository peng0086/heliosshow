var topic = [
    "觀看 2 部 TED's Youtube",
    "完成 20 題英語單字測驗",

];

// plan checkbox

$(function(){
    $("[type='checkbox']").on("change",updateProgress);
   
});
    function updateProgress(){
        let hasChecked=0;
        for(let x=0;x<$("[type='checkbox']").length;x++){
            if($("[type='checkbox']")[x].checked){
                hasChecked+=1;
            }
        }
        $("progress").attr("max", $("[type='checkbox']").length);
        $("progress").attr("value", hasChecked);
    };

// add plan

$(function(){
    
    var btn = document.querySelector('.btnclass');

    btn.onclick=function(){

        var activity=document.getElementById("addnewplan").value.toString();
        topic.pop()
        topic.push((activity))
            
        var btn = document.querySelector('.btnclass');
            
        let topicCount = topic.length;

        $("#plan").append(
            `<input type="checkbox"><span>${topic[1]}</span><br>`);

    };
});