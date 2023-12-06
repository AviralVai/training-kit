
function showEmployee() {
  var json_url = 'api/ap_fw_employee.php';
  var emp_html=`<!-- Employee List -->`;

  emp_html += getTitle();

  emp_html += `
				<div class="row">
					<div class="col-lg-12">
						<div class="panel panel-default card-view pa-0">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="contact-list">
										<div class="row">`;

  emp_html += getPanel();

  emp_html += `<div id="emp_data"></div>`;
      
  emp_html += `
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Row -->`;  

  $("#page-content").html(emp_html);  
  
  showEmpData('X');
  
}

function getTitle() {
  
  var title_html = `
				<!-- Title -->
				<div class="row heading-bg">
					<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
					  <h5 class="txt-dark">contact</h5>
					</div>
					<!-- Breadcrumb -->
					<div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
					  <ol class="breadcrumb">
						<li><a href="../index.php">employee</a></li>
						<li><a href="#"><span>list</span></a></li>
						<li class="active"><span>contact list</span></li>
					  </ol>
					</div>
					<!-- /Breadcrumb -->
				</div>
				<!-- /Title -->`;
  
  return title_html;

}

function getPanel() {

  var panel_html = `
        <aside class="col-lg-2 col-md-4 pr-0">
          <div class="mt-20 mb-20 ml-15 mr-15">
            <a class="btn btn-success btn-block btn-add-contact">
            Add new contact
            </a>
          </div>`;
          
    panel_html += `
      <ul class="inbox-nav mb-30">
        <div id="roleLabel"></div>
      </ul>`;
      
    panel_html += `          
          <a class="txt-success create-label  pa-15" href="javascript:void(0)" data-toggle="modal" data-target="#myModal_1">+ Create New Role</a>
          <div id="myModal_1" class="modal fade in" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <h5 class="modal-title" id="myModalLabel">Add Role</h5>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-group">
                      <label class="control-label mb-10">Role Code</label>
                      <input type="text" class="form-control" placeholder="Role Code">
                    </div>
                    <div class="form-group">
                      <label class="control-label mb-10">Role Name</label>
                      <input type="text" class="form-control" placeholder="Role Name">
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-success waves-effect" data-dismiss="modal">Save</button>
                  <button type="button" class="btn btn-success waves-effect" data-dismiss="modal">Cancel</button>
                </div>
              </div>
              <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
          </div>
        </aside>
        `;
  
    showRoleLabel();
    
    return panel_html;

}  

function showEmpData(rcode) {
  var json_url = 'api/ap_fw_employee.php?rcode='+rcode;
  var emp_no = 1;
  var emp_data;

  emp_data = `
    <aside class="col-lg-10 col-md-8 pl-0">
      <div class="panel pa-0">
      <div class="panel-wrapper collapse in">
      <div class="panel-body  pa-0">  
        <div class="table-responsive mb-30">
          <table id="datable_1" class="table  display table-hover mb-30" data-page-size="10">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Joining date</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>  
            <tbody>`;
            
  $.getJSON(json_url, function(data){ 
    $.each(data.records, function(key, val) {

      var role_color = val.role == 'Designer' ? 'primary' : val.role == 'Developer' ? 'info' : val.role == 'Accountant' ? 'info' : val.role == 'Manager' ? 'success' : val.role == 'Hr' ? 'success' : val.role == 'Chairman' ? 'danger':'default';
      
      

      emp_data += `
            <tr>
              <td>`+emp_no+`</td>
              <td><a href="#">`+val.emp_name+`</a></td>
              <td>`+val.email+`</td>
              <td>`+val.phone+`</td>
              <td><span class="label label-`+role_color+`">`+val.role+`</span> </td>
              <td>`+val.doj+`</td>
              <td>`+val.salary+`</td>
              <td><a class="btn-update text-inverse pr-10" title="Edit" data-toggle="tooltip" id=`+val.emp_id+`><i class="zmdi zmdi-edit txt-warning"></i></a>
                  <a class="btn-delete text-inverse" title="Delete" data-toggle="tooltip" id=`+val.emp_id+`><i class="zmdi zmdi-delete txt-danger"></i></a>
                  <a href="#" title="delete" class="delete" id=`+val.emp_id+` onclick="return confirm('Are you sure you want to delete this item')"><i class="zmdi zmdi-delete txt-danger"></i></a>
              </td>
            </tr>`;
      
      emp_no = emp_no + 1;      

    });

    emp_data += `
                        </tbody>  
                      </table>    
                    </div>  
                    </div>
                    </div>
                    </div>
                  </aside>`; 
    
    $("#emp_data").html(emp_data);

  });

}

function showRoleLabel() {
  var json_url = 'api/ap_fw_role_label.php';
  var role_html = `<!-- Role Lable List -->`;
  var active = 'active';
  
  $.getJSON(json_url, function(data){ 
    $.each(data.records, function(key, val) {
      var role_code = val.role_name == 'Designer' ? 'primary' : val.role_name == 'Developer' ? 'info' : val.role_name == 'Accountant' ? 'info' : val.role_name == 'Manager' ? 'success' : val.role_name == 'Hr' ? 'success' : val.role_name == 'Chairman' ? 'danger':'default';
      role_html += `
            <li class="`+active+`">
              <a class="role-list" rcode="`+val.role_code+`">`+val.role_name+`<span class="label label-`+role_code+` ml-10">`+val.role_count+`</span></a>
            </li>
            `;
      active = '';      
    });
    $("#roleLabel").html(role_html);
  });    
}
