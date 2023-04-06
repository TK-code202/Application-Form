$(document).ready(function() {
    $("#formOne").submit(function (event){
        const firstNameInput = $("input#first-name").val();
        const middleNameInput = $("input#middle-name").val();
        const lastNameInput = $("input#last-name").val();
        const telNumberInput = $("input#tel-number").val();
        const emailInput = $("input#email").val();
        const jobInput = $("select#job").val();
        const doaInput = $("input#doa").val();



        $(".f-name").text(firstNameInput);
        $(".m-name").text(middleNameInput);
        $(".l-name").text(lastNameInput);
        $(".tel-number").text(telNumberInput);
        $(".email").text(emailInput);
        $(".job").text(jobInput);
        $(".doa").text(doaInput);



        $("#letter").show();
        $(".contain").hide();

   

        event.preventDefault();


    });
});