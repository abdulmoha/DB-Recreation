//business logic
function Name(name){
  this.name=name;
}

function EMail(mail){
  this.mail=mail;
}

Name.prototype.namen = function(){
  return this.name
}

EMail.prototype.mailen = function(){
  return this.mail
}

//User Logic
$(document).ready(function(){
    $("#myModal").modal('show');


    $("form#nameNmail").submit(function(event) {
      event.preventDefault();

      var inputtedName = $("input#name").val();
      var newName = new Name(inputtedName);

     $("ul.namen").append("<span class='contact'>" + newName.namen()  + "</span>");

     var inputtedMail = $("input#email").val();
     var newEMail = new EMail(inputtedMail);

     $(".contact").last().click(function() {
        $(".mailen").show();
      });

    $("ul.mailen").append(newEMail.mailen());

    $("input#name").val("");
    $("input#email").val("");
    


  });
});
