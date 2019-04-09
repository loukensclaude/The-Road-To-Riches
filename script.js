$("button").click(function(){
    $("input").hide();
    $("p").hide();
    $(".res").show();
    $("h2").hide();
    $("button").hide();
    $(".img").show();
    var name =$(".in1").val();
    var age = $(".mget").val();
    var saving = $(".msave").val();
    var numberAge = parseInt(age);
    var futureAge = numberAge + 30;
    var numberSave = parseInt(saving);
    var futureSave = numberSave * 10950;
    var response =  name + " based on my calculations in 2049 you will be " + futureAge + " and will have around " + futureSave + " dollars ";
     $("h3").text(response);
});

