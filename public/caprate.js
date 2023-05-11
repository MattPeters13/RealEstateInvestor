$(document).ready(function(){

    $("button").on("click", capRateCalc);//on click
    $("#button2").on("click", mortgageCalc);
    let capRatesArray = [];



    function isFormValid(){
        let isValid= true;

        if($("#rent").val() == ""){
            isValid= false;
            $("#capFeedback").html("Fill in all areas");
            $("#capFeedback").attr("class", "bg-warning text-white");
        }else if($("#units").val() == ""){
            isValid= false;
            $("#capFeedback").html("Fill in all areas");
            $("#capFeedback").attr("class", "bg-warning text-white");
        }else if($("#expenses").val() == ""){
            isValid= false;
            $("#capFeedback").html("Fill in all areas");
            $("#capFeedback").attr("class", "bg-warning text-white");
        }
        else if($("#marketV").val() == ""){
            isValid= false;
            $("#capFeedback").html("Fill in all areas");
            $("#capFeedback").attr("class", "bg-warning text-white");
        }
        return isValid;
    }//isFormValid

    function capRateCalc(){
        $("#validationFdbk").html("");
        if(!isFormValid()){
            return;
        }

      
        let rentPerUnit= $("#rent").val();
        let numberOfUnits= $("#units").val();
        let totalExpenses= $("#expenses").val();
        let marketValue= $("#marketV").val();
        let quotientCapRate = ((rentPerUnit*numberOfUnits*12)-totalExpenses)/marketValue*100;
        console.log(quotientCapRate.toFixed(2) + "%");
        capRatesArray.push(quotientCapRate.toFixed(2)+",");


        if(quotientCapRate > 6){
            $("#capFeedback").html(quotientCapRate.toFixed(2) + "%"+" Phenomenal!");
            $("#capFeedback").attr("class", "bg-success text-white");
            $(".GoodRateImg").html("<img src='money.gif'>");
            
        }else if(quotientCapRate >= 5.4 && quotientCapRate < 6){
            $("#capFeedback").html(quotientCapRate.toFixed(2) + "%"+" Good Rate!");
            $("#capFeedback").attr("class", "bg-success text-white");
            $(".GoodRateImg").html("<img src='BradDeal.gif'>");
            
        }else if(quotientCapRate < 5.4 && quotientCapRate >= 4){
            $("#capFeedback").html(quotientCapRate.toFixed(2) + "%"+" Not so Good");
            $("#capFeedback").attr("class", "bg-warning text-white");
            $(".GoodRateImg").html("<img src='DtSoundsGood.gif'>");
            
        }else if(quotientCapRate < 4){
            $("#capFeedback").html(quotientCapRate.toFixed(2) + "%"+" Really Bad");
            $("#capFeedback").attr("class", "bg-danger text-white");
            $(".GoodRateImg").html("<img src='KeyPeele.gif'>");
            
        }else{
            $("#capFeedback").html("Enter in all Values");
            $("#capFeedback").attr("class", "bg-warning text-white");
            $(".markImg1").html("<img src='moneyBugs.gif'>");    
        }
        $("#arrayFeedback").html("Previous Cap Rates: "+capRatesArray);
        $("#arrayFeedback").attr("class", "bg-info text-black");
        
    }//capRateCalc


    function isFormValidMortgage(){
        let isValidMort= true;

        if($("#loanAmount").val() == ""){
            isValidMort= false;
            $("#MortFeedback").html("Fill in all areas");
            $("#MortFeedback").attr("class", "bg-warning text-white");
        }else if($("#loanTerm").val() == ""){
            isValidMort= false;
            $("#MortFeedback").html("Fill in all areas");
            $("#MortFeedback").attr("class", "bg-warning text-white");
        }else if($("#intrestRate").val() == ""){
            isValidMort= false;
            $("#MortFeedback").html("Fill in all areas");
            $("#MortFeedback").attr("class", "bg-warning text-white");
        }
        return isValidMort;
    }//isFormValidMortgage

    function mortgageCalc(){
        if(!isFormValidMortgage()){
            return;
        }

        let loanAmount= $("#loanAmount").val();
        let loanTerm= $("#loanTerm").val();
        let intrestRate= $("#intrestRate").val();
        let monthlyIntrestRate = (intrestRate/100)/12;
        let mortgageNum = loanAmount*(monthlyIntrestRate*(1+monthlyIntrestRate)**(loanTerm*12)/((1+monthlyIntrestRate)**(loanTerm*12)-1));
        console.log(mortgageNum);
        $("#MortFeedback").html("$"+mortgageNum.toFixed(2)+" Per Month");
        $("#MortFeedback").attr("class", "bg-info text-white");
        
    }

})