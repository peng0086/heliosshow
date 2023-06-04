let imageURL_Array=[
    "https://photo.518.com.tw/selfmedia/articles/1822/166184376108829.jpeg",
    "https://lordcat.tw/wp-content/uploads/2021/09/1631538408-378fce845ce05de4c29be3e870b50e13.jpg",
    "https://tokyo-kitchen.icook.network/uploads/recipe/cover/355834/b8ce15624e2ddb11.jpg"
    
];

var randomChildNumber,buffer
var tf=0
$(function(){
    let currentQuiz = null;
    $("#StartButton").on("click",function(){
        if(currentQuiz==null){//還沒開始
            currentQuiz=0;
            $("#quiztitle").text((""));

            $("#answer").empty();

            $("#options").empty();
            
            $("#question").text(questions[0].question);
            questions[0].answers.forEach(function(element,index,array){
                $("#options").append(
                    `<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);
            });
            //將按鈕上的文字換成Next
            $("#StartButton").attr("value","check");
        }else{//已經開始
            // $("#answer").text(("try again!"));
            $("#StartButton").attr("value","check");
            $.each($(":radio"),function(i,val){
                if(val.checked){
                    if(isNaN(questions[currentQuiz].answers[i][1])){//顯示最終結果
                        let finalResult = questions[currentQuiz].answers[i][1];
                        $("#question").text(finalAnswers[finalResult][0]);
                        $("#options").empty();
                        $("#options").append(`${finalAnswers[finalResult][1]}<br><br>`);
                        currentQuiz=null;
                        $("#StartButton").attr("value","重新開始");
                    }
                    else if(tf==1){
                         currentQuiz=Math.floor(Math.random()*10)
                        while(currentQuiz==buffer)
                        currentQuiz=Math.floor(Math.random()*10);
                        buffer=currentQuiz

                            $("#question").text(questions[currentQuiz].question);
                            $("#answer").empty();
                            $("#options").empty();
                            questions[currentQuiz].answers.forEach(function(element,index,array){
                                $("#options").append(
                                    `<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);
                            });
                            tf=0
                    }
                    else{//顯示下一題
                        $("#StartButton").attr("value","check");
                        $("#answer").empty();
                        if(questions[currentQuiz].answers[i][1]==1){
                            tf=1
                            $("#answer").append(`<i class="fa-solid fa-check fa-bounce"></i>`);
                            $("#StartButton").attr("value","next");
                        }
                        else{
                            $("#answer").append(`<i class="fa-solid fa-xmark fa-flip"></i>`);
                            tf=0
                            $("#question").text(questions[currentQuiz].question);
                            $("#options").empty();
                            questions[currentQuiz].answers.forEach(function(element,index,array){
                                $("#options").append(
                                    `<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);
                            });

                        }
                       
                        // $("#StartButton").attr("value","next");
                    }
                    return false;
                }
            });
        }
    });
});


// var numberOfListItem=$("li").length;
        // randomChildNumber=Math.floor(Math.random()*numberOfListItem);
        // while(randomChildNumber==buffer)
        //     randomChildNumber=Math.floor(Math.random()*numberOfListItem);
        // buffer=randomChildNumber
        // $("#error").text($("li").eq(randomChildNumber).text());

        // $("img").attr("src",imageURL_Array[randomChildNumber]);