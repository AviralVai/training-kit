    <!DOCTYPE html>
    <html lang="en">

    <?php include_once "ht_gs_head.php"; ?>

      <body>
      
        <!--Preloader-->
        <div class="preloader-it">
          <div class="la-anim-1"></div>
        </div>
        <!--/Preloader-->

        <div class="wrapper theme-1-active pimary-color-green">

          <?php include_once "ht_gs_navbar.php"; ?>
          <?php include_once "ht_gs_lsidebar.php"; ?>
          <?php include_once "ht_gs_rsidebar.php"; ?>
        
          <!-- Right Sidebar Backdrop -->
          <div class="right-sidebar-backdrop"></div>
          <!-- /Right Sidebar Backdrop -->
          
          <!-- Main Content -->
          <div class="page-wrapper">
            <div class="container-fluid">
              <div id="page-content"></div>
              <?php include_once "ht_gs_footer.php";?>
            </div>
          </div>
          <!-- /Main Content -->

        </div>
        <!-- /#wrapper -->
        
        <!-- JavaScript -->
        <?php 
          include_once "ht_gs_include.php"; 
          include_once "ht_fw_include.php"; 
        ?>
        
      </body>

    </html>