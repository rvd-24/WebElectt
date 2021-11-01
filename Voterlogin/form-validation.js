$(function() {
    
    $("form[name='form']").validate({
      
      rules: {
        name: "required",
        votid: {
          required: true,
          minlength: 2
        }
      },
     
      messages: {
        firstname: "Please enter your name",
        votid: {
          required: "Please provide a voter id",
          minlength: "Your password must be at least 2 characters long"
        },
        
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  });