$(function(){
    let currentQuiz = null;
    $("#StartButton").on("click",function(){
        if(currentQuiz==null){//還沒開始
            currentQuiz=0;
            $("#options").empty();
            
            $("#question").text(questions[0].question);
            questions[0].answers.forEach(function(element,index,array){
                $("#options").append(
                    `<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);
            });
            //將按鈕上的文字換成Next
            $("#StartButton").attr("value","Next");
        }else{//已經開始
            $.each($(":radio"),function(i,val){
                if(val.checked){
                    if(isNaN(questions[currentQuiz].answers[i][1])){//顯示最終結果
                        let finalResult = questions[currentQuiz].answers[i][1];
                        $("#question").text(finalAnswers[finalResult][0]);
                        $("#options").empty();
                        $("#options").append(`${finalAnswers[finalResult][1]}<br><br>`);
                        currentQuiz=null;
                        $("#StartButton").attr("value","重新開始");
                    }else{//顯示下一題
                        currentQuiz=questions[currentQuiz].answers[i][1]-1;
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        questions[currentQuiz].answers.forEach(function(element,index,array){
                            $("#options").append(
                                `<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);
                        });
                    }
                    return false;
                }
            });
        }
    });
});