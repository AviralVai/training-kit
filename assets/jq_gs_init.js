
$(document).ready(function(){

  init();

  // show employee details 
  $(document).on('click', '.role-list', function(){
    var rcode = $(this).attr('rcode');
    showEmpData(rcode);
    setDataTable('#datable_1');
  });

  // show contact modal window 
  $(document).on('click', '.btn-add-contact, .btn-update', function(){
    var id = 0;
    var oper = 'I';

    if ($(this).is('.btn-update')) {
      id = $(this).attr('id');
      oper = 'U';
    }
    
    // $(document).ready(function(){
      $(document).on('click','.delete', function(){
          var emp_id = $(this).val(); // tested and returns 1 (see button value)
          
          $.ajax({
              url: 'ap_del.php',
              type: 'post',
              data: { emp_id: emp_id },
              success: function() {
                  $('#'.concat(emp_id)).remove();
              }
          });
      });
  

    var json_url = 'api/ap_fw_employee.php?id='+id;
    $.getJSON(json_url, function(data){
      modalAddContact(id, oper, data);
      $("#md-contact").modal({backdrop: 'static', keyboard: false});
    });  

  });

    
 $(document).on('focusout','#email',function(){
  var email=$('#email').val();
  var regex=/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email))
  {
    $("#invalid_email").html('This email is not valid!!!');
    $("#invalid_email").css('color','red');
  }
  else if(email=='')
  {
    $("#invalid_email").html('please enter your email');
  }
  else{
    $("#invalid_email").html('your email is valid').css('color','green');
  }
 });

  $(document).on('click', '.btn-save-contact', function(){
    id = $(this).attr('id');
    oper = $(this).attr('oper');
    manageContact(id, oper);
  });





  // Left menu action
  $(document).on('click', '.menu', function(){
    option = $(this).attr('option');
    if (option=='emp-list')
      init();
  });
  
});  


function init() {
  showEmployee();
  setDataTable('#datable_1');
}

function setDataTable(table_id) {
    setTimeout(function() {
          $(table_id).DataTable()}, 500);  
}

function getFieldValue(field_name, modal_id) {
  field_val = $.trim($('#'+modal_id+' [name='+field_name+']').val());
  if(field_val == '')
    field_val =  $.trim($('[name='+field_name+']').val());
  return field_val;
}



// $('.delete').on("click", function (e) {
//   e.preventDefault();

//   var choice = confirm($(this).attr('data-confirm'));

//   if (choice) {
//       window.location.href = $(this).attr('#');
//   }
// });

// function confirmDelete(url) {
//   if (confirm("Are you sure you want to delete this?")) {
//       window.open(url);
//   } else {
//       false;
//   }       
// }