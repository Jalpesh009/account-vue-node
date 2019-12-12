
$( document ).ready(function() {
  $('.treeview-animated').mdbTreeview();


  $('#create-type-btn').click(function(){
    var $list;
    $list = $('.treeview-animated-list');
    var type_name = $('#call-type-name:text').val();
    $list.append('<li class="treeview-animated-items"><a class="closed"><i class="fas fa-caret-right mr-2 test"></i><span>' + type_name + '</span></a><ul class="nested"><li class="treeview-animated-element"><span class="call-rule">New call rule</span></li></ul></li>');
    $('.treeview-animated').mdbTreeview();
    $(".add-new-type").modal("hide");
    $('#call-type-name').val('');
  });

  $('.add-rule-btn').click(function(){
    var $list;
    $list = $(this).parent().next();
    $collapsed = $(this).parent().prev();
    $('#create-rule-btn').click(function(){
      var rule_name = $('#call-rule-name:text').val();
      $list.append('<li class="treeview-animated-element"><span class="call-rule">' + rule_name + '</span></li>');
      $('.treeview-animated').mdbTreeview();
      $(".add-new-rule").modal("hide");
      $('#call-rule-name').val('');
    });
  });

  $('.delete-type-btn').click(function(){
    var grandparent = $(this).parent().parent();
    $('#delete-type-btn').click(function(){
    grandparent.remove();
    $(".delete-type").modal("hide");
      });
  });



  var n = $(".assign-user").length;
  if(n<4) {
    $(".assign-user").css("flex", "0 0 auto");
  }


  $('.delete-user-btn').click(function(){
    var parent = $(this).parent();
    parent.remove();
    var n = $(".assign-user").length;
    if(n<3) {
      $(".assign-user").css("flex", "0 0 auto");
    }
  });
});
