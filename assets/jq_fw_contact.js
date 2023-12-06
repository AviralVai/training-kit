
function modalAddContact(id, oper, data) {

  var emp_name = "";
  var email = "";
  var phone = "";
  var role_code = "";
  var doj = "";
  var salary = "";
  
  var contact_html = `<!-- Contact List -->`;

  // if service is returning data then show edit viewpoint
  $.each(data.records, function(key, val) {
    
    emp_name = val.emp_name; 
    email = val.email;
    phone = val.phone;
    role_code = val.role_code;
    doj = val.doj;
    salary = val.salary;

  });  
  
  contact_html+=`  
            <!-- Modal -->
            <div aria-hidden="true" role="dialog" tabindex="-1" id="md-contact" class="modal fade" style="display: none;">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title" id="myModalLabel">Add New Contact</h4>
                  </div>
                  <div class="modal-body">
                    <div class="form-horizontal form-material">
                      <div class="form-group">
                        <div class="col-md-12 mb-20">
                          <input name="first-name" type="text" class="form-control" placeholder="First Name">
                          <input name="last-name" type="text" class="form-control" placeholder="Last Name">
                        </div>
                        <div class="col-md-12 mb-20">
                          <input name="email" type="email" class="form-control" id="email" placeholder="Email">
                          <span><p id="invalid_email"></p></span>
                        </div>
                        <div class="col-md-12 mb-20">
                          

                        
                            <div class="input-group">
                            <span class="input-group-addon">+91</span>
                            <input name="phone" placeholder="" data-mask="999-999-9999" class="form-control" autocomplete="off">
                           
                          </div>                        
              
                        </div>
                        <div class="col-md-12 mb-20">
                          <div id="role-dropdown"></div>
                        </div>
                        </div>
                        <div class="form-group">
                        <div class="col-md-12 mb-20">
                          <input name="doj" type="date" class="form-control" placeholder="Date of joining">
                        </div>
                        </div>
                        <div class="col-md-12 mb-20">
                          <input name="salary" type="text" class="form-control" placeholder="Salary">
                        </div>
                      </div>
                      </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-success waves-effect btn-save-contact" oper="`+oper+`" id="`+id+`">Save</button>
                    <button type="button" class="btn btn-danger waves-effect" data-dismiss="modal">Cancel</button>
                  </div>
                </div>
                <!-- /.modal-content -->
              </div>
              <!-- /.modal-dialog -->
            </div>
            <!-- /.modal -->
          </div>`;

  // inject to 'page-content' of our app
  $("#modal-contact").html(contact_html);

  //Initialize role list dropdown 
  showRoleDropdown(role_code);
  
}

function showRoleDropdown(role_code){

  var json_url = 'api/ap_fw_role_label.php';
  var role_dropdown = `<!-- Role List -->`;

  $.getJSON(json_url, function(data){  

    role_dropdown+=`
        <select name="role_list" class="role-list form-control">`;

    $.each(data.records, function(key, val) {
      var selected=val.role_code==role_code?"selected":"";
      role_dropdown+=`
        <option value="`+val.role_code+`" `+selected+`>`+val.role_name+`</option>`;
    });

    role_dropdown+=`
            </select>`;
          
    $("#role-dropdown").html(role_dropdown);        

  });

}  

function manageContact(id, oper) {

  var first_name = getFieldValue('first-name', 'md-contact');
  var last_name = getFieldValue('last-name', 'md-contact'); 
  var email = getFieldValue('email', 'md-contact');
  var ph = getFieldValue('phone', 'md-contact');
  var role_code = getFieldValue('role_list', 'md-contact');
  var doj = getFieldValue('doj', 'md-contact');
  var salary = getFieldValue('salary', 'md-contact');


var phone="+91 "+ph;
var emp_name =first_name+" "+last_name;

  
  $.ajax({
      url: 'api/ap_fw_contact.php',
      type : "POST",
      contentType : 'application/json',
      dataType : 'json',
      data : JSON.stringify( { id: id
                             , emp_name: emp_name
                             , email: email
                             , phone: phone
                             , role_code: role_code
                             , doj: doj
                             , salary: salary
                             , oper: oper
                             }
                           ),
      success : function(result) {
        $('#md-contact').modal('hide'); 
        showEmployee();
      },
      error: function(xhr, status, error) {
        alert('Error');
      }
  });
  
}


function del_product(id){
  $('.process').css('display','block');
  $('.process').html('<img src="./images/loading.gif">');
  $.ajax({
      'url':'api/ap_fw_employee.php?action=del_product&id='+id,
      'type':"POST",
      success: function(result){
          info=JSON.parse(result);
          if(result.status==1){
              setTimeout(function(){
                  $('.process').hide();
                  $('.tr_'+id).hide();
              },3000);
              setTimeout(function(){
                  $('.process').html(result.notice);
              },1000);
          } else if(result.status==0){
              setTimeout(function(){
                  $('.process').hide();
              },3000);
              setTimeout(function(){
                  $('.process').html(result.notice);
              },1000);
          }
      }
  });
}


