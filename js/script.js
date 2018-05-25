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
//making the pop up modal to essentially pop up
$(document).ready(function(){
    $("#myModal").modal('show');


    $("form#nameNmail").submit(function(event) {
      event.preventDefault();

      var inputtedName = $("input#name").val();
      var newName = new Name(inputtedName);

     $("ul.namen").append(newName.namen() + "<li><span class='contact'>"  + "</span></li>");

     var inputtedMail = $("input#email").val();
     var newEMail = new EMail(inputtedMail);

     $(".contact").last().click(function() {
        $(".mailen").show();
      });

    $("ul.mailen").append(newEMail.mailen());

  });
});
