var sendEmailClass=require('./sendEmail');

function loadEmailTemplate(user_name,message_body)
{
  var email_message="";
  var email_subject="Group Star Email";
  email_message+="<html xmlns='http://www.w3.org/1999/xhtml'>";
  email_message+="<head>";
  email_message+="<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />";
  email_message+="<meta name='viewport' content='width=device-width' />";
  email_message+="<title>Group Star</title>";
  email_message+="<style>";
  email_message+=".row {margin-right: -15px;margin-left: -15px;}";
  email_message+=".text-center {text-align: center;}";
  email_message+="a {color:transparent;}";
  email_message+=".btn-facebook {background-color: #3b5998;color: #fff;border-color: #3b5998 !important; }";
  email_message+=".btn-warning {color: #fff;background-color: #f7ca1a;border-color:  #f7ca1a !important;}";
  email_message+=".btn{display: inline-block;font-weight: 400;text-align: center;white-space: nowrap;vertical-align: middle;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;border: 1px solid transparent;padding: .375rem .75rem;font-size: 1rem;line-height: 1.5;border-radius: .25rem;transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;}";
  email_message+="</style>";
  email_message+="</head>";
  email_message+="<body style='background-color:#f3f3f3;font-family:Arial; font-size:14px'>";
  email_message+="<div style='margin-top:40px'></div>";
  email_message+="<div style=''>";
  email_message+="<div style='width:100%;height:100%'>";
  email_message+="<div style='width:600px;margin:0 auto;background-color:white;min-height:400px;border:1px solid #cccccc;padding:25px 25px 25px 25px'>";
  email_message+="<div>";
  email_message+="<div style='text-align:center;border-bottom: 1px solid #ccc; padding-bottom:10px'>";
  email_message+="<h1>Group Star</h1>";
  email_message+="</div>";
  email_message+="<h3 style='color:#4c4c4c; font-family:Helvetica; font-size:15px; line-height:125%;'>Hi &nbsp;"+user_name+"</h3>";
  email_message+="<div style='margin-bottom:10px !important;min-height:100px; color: #4c4c4c;'>"; email_message+="<span style='font-family:Helvetica; font-size:16px; line-height:125%;'>";     email_message+=message_body;
  email_message+=" </span>";

  email_message+=" </div>";
  email_message+="<br/>";
  email_message+="<div>";
  email_message+="<span>Kind Regards,</span>";
  email_message+="</div>";
  email_message+="<div>";
  email_message+="<span>The Group Star Team</span>";
  email_message+="</div>";
  email_message+="<div>";
  email_message+="<span><a href='https://groupstar.io'>www.groupstar.io</a></span>";
  email_message+="</div>";
  email_message+="<div>";
  email_message+="<h2>Group Star</h2>";
  email_message+="</div>";
  email_message+="</div>";
  email_message+="</div>";
  email_message+="</div>";
  email_message+="</div>";
  email_message+="</body>";
  email_message+="</html>";
  return email_message;
}
exports.registrationEmail = function(user_name,email,password)
{
    var message_body="";
    //var user_name=first_name+""+last_name;
    message_body+="<p>Welcome to CallAnswering </p>";
    //var load_template=loadEmailTemplate(user_name,message_body);
    var load_template=loadRegisterEmailTemplate(user_name,email,password);
    //SendEmail(email,"Welcome Group Star",load_template);
    var result=sendEmailClass.sendEmail(email,"Welcome CallAnswering",load_template);
    return result;
    //loadEmailTemplate(user_name,message_body);
}

exports.forgetPasswordEmail = function(email,user_name,reset_link)
{
    var message_body="";
    message_body+="<p>Click Below Button For Reset Password</p>";
    message_body+="<br/>";
    message_body+="<p style='text-align: center;'>";
    message_body+="<a href='"+reset_link+"' title='reset password'style='text-decoration: none;width:100px;background-color:#3b5998!important;border: 1px solid #3b5998;text-decoration: none;color:white;padding: 11px 30px;'>Reset Password</a>";
    message_body+="</p>";

    var load_template=loadEmailTemplate(user_name,message_body);
    var result=sendEmailClass.sendEmail(email,"Reset Password",load_template);
    return result;
}
exports.productionFeedBackToUser = function(email,user_name,subject,message)
{
    var message_body="";
    message_body+="<p>Admin Given Below Comment for Related Video Clip</p>";
    message_body+="<p>";
    message_body+="Comment:<b>"+message+"</b>";
    message_body+="</p>";

    var load_template=loadEmailTemplate(user_name,message_body);
    var result=sendEmailClass.sendEmail(email,subject,load_template);
    return result;
}

function loadRegisterEmailTemplate(user_name,email,password)
{
    var email_message="";
    email_message+="<!DOCTYPE HTML PUBLIC '-//W3C//DTD XHTML 1.0 Transitional //E' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>";
    email_message+="<html xmlns='http://www.w3.org/1999/xhtml' xmlns:v='urn:schemas-microsoft-com:vml' xmlns:o='urn:schemas-microsoft-com:office:office'>";
    email_message+="<head>";
    email_message+="<meta http-equiv='Content-Type' content='text/html; charset=utf-8'>";
    email_message+="<meta name='viewport' content='width=device-width'>";
    email_message+="<meta http-equiv='X-UA-Compatible' content='IE=edge'>";
    email_message+="<title></title>";
    email_message+="<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>";
    email_message+="<style type='text/css' id='media-query'>";
    email_message+="body{margin:0;padding:0}table,td,tr{vertical-align:top;border-collapse:collapse}.ie-browser table,.mso-container table{table-layout:fixed}*{line-height:inherit}a[x-apple-data-detectors=true]{color:inherit!important;text-decoration:none!important}[owa] .img-container button,[owa] .img-container div{display:block!important}[owa] .fullwidth button{width:100%!important}[owa] .block-grid .col{display:table-cell;float:none!important;vertical-align:top}.ie-browser .block-grid,.ie-browser .num12,[owa] .block-grid,[owa] .num12{width:600px!important}.ExternalClass,.ExternalClass div,.ExternalClass font,.ExternalClass p,.ExternalClass span,.ExternalClass td{line-height:100%}.ie-browser .mixed-two-up .num4,[owa] .mixed-two-up .num4{width:200px!important}.ie-browser .mixed-two-up .num8,[owa] .mixed-two-up .num8{width:400px!important}.ie-browser .block-grid.two-up .col,[owa] .block-grid.two-up .col{width:300px!important}.ie-browser .block-grid.three-up .col,[owa] .block-grid.three-up .col{width:200px!important}.ie-browser .block-grid.four-up .col,[owa] .block-grid.four-up .col{width:150px!important}.ie-browser .block-grid.five-up .col,[owa] .block-grid.five-up .col{width:120px!important}.ie-browser .block-grid.six-up .col,[owa] .block-grid.six-up .col{width:100px!important}.ie-browser .block-grid.seven-up .col,[owa] .block-grid.seven-up .col{width:85px!important}.ie-browser .block-grid.eight-up .col,[owa] .block-grid.eight-up .col{width:75px!important}.ie-browser .block-grid.nine-up .col,[owa] .block-grid.nine-up .col{width:66px!important}.ie-browser .block-grid.ten-up .col,[owa] .block-grid.ten-up .col{width:60px!important}.ie-browser .block-grid.eleven-up .col,[owa] .block-grid.eleven-up .col{width:54px!important}.ie-browser .block-grid.twelve-up .col,[owa] .block-grid.twelve-up .col{width:50px!important}@media only screen and (min-width:620px){.block-grid,.block-grid .col.num12{width:600px!important}.block-grid .col{vertical-align:top}.block-grid.mixed-two-up .col.num4{width:200px!important}.block-grid.mixed-two-up .col.num8{width:400px!important}.block-grid.two-up .col{width:300px!important}.block-grid.three-up .col{width:200px!important}.block-grid.four-up .col{width:150px!important}.block-grid.five-up .col{width:120px!important}.block-grid.six-up .col{width:100px!important}.block-grid.seven-up .col{width:85px!important}.block-grid.eight-up .col{width:75px!important}.block-grid.nine-up .col{width:66px!important}.block-grid.ten-up .col{width:60px!important}.block-grid.eleven-up .col{width:54px!important}.block-grid.twelve-up .col{width:50px!important}}@media (max-width:620px){.block-grid,.col,img.fullwidth,img.fullwidthOnMobile{max-width:100%!important}.block-grid,.col{min-width:320px!important;display:block!important}.block-grid{width:calc(100% - 40px)!important}.col{width:100%!important}.col>div{margin:0 auto}.no-stack .col{min-width:0!important;display:table-cell!important}.no-stack.two-up .col{width:50%!important}.no-stack.mixed-two-up .col.num4{width:33%!important}.no-stack.mixed-two-up .col.num8{width:66%!important}.no-stack.three-up .col.num4{width:33%!important}.no-stack.four-up .col.num3{width:25%!important}.mobile_hide{min-height:0;max-height:0;max-width:0;display:none;overflow:hidden;font-size:0}}";
    email_message+="</style>";
    email_message+="</head>";
    email_message+="<body class='clean-body' style='margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #E3E8E5'>";
    email_message+="<style type='text/css' id='media-query-bodytag'>";
    email_message+="</style>";
    email_message+="<table class='nl-container' style='border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #E3E8E5;width: 100%' cellpadding='0' cellspacing='0'>";
    email_message+="<tbody>";
    email_message+="<tr style='vertical-align: top'>";
    email_message+="<td style='word-break: break-word;border-collapse: collapse !important;vertical-align: top'>";
    email_message+="<div style='background-color:transparent;'> <div style='Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;' class='block-grid '> <div style='border-collapse: collapse;display: table;width: 100%;background-color:transparent;'>";
    email_message+="<div class='col num12' style='min-width: 320px;max-width: 600px;display: table-cell;vertical-align: top;'> <div style='background-color: transparent; width: 100% !important;'>";
    email_message+="<div style='border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;'>";
    email_message+="<table border='0' cellpadding='0' cellspacing='0' width='100%' class='divider ' style='border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 100%;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%'> <tbody> <tr style='vertical-align: top'> <td class='divider_inner' style='word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right: 10px;padding-left: 10px;padding-top: 10px;padding-bottom: 10px;min-width: 100%;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%'> <table class='divider_content' height='0px' align='center' border='0' cellpadding='0' cellspacing='0' width='100%' style='border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid transparent;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%'> <tbody> <tr style='vertical-align: top'> <td style='word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%'> <span>&#160;</span> </td></tr></tbody> </table> </td></tr></tbody></table>";
    email_message+="</div></div></div></div></div></div>";
    email_message+="<div style='background-color:transparent;'> <div style='Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #84A8A5;' class='block-grid '> <div style='border-collapse: collapse;display: table;width: 100%;background-color:#84A8A5;'> <div class='col num12' style='min-width: 320px;max-width: 600px;display: table-cell;vertical-align: top;'> <div style='background-color: transparent; width: 100% !important;'> <div style='border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:5px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;'> <table border='0' cellpadding='0' cellspacing='0' width='100%' class='divider ' style='border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 100%;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%'> <tbody> <tr style='vertical-align: top'> <td class='divider_inner' style='word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right: 0px;padding-left: 0px;padding-top: 0px;padding-bottom: 0px;min-width: 100%;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%'> <table class='divider_content' align='center' border='0' cellpadding='0' cellspacing='0' width='100%' style='border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid transparent;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%'> <tbody> <tr style='vertical-align: top'> <td style='word-break: break-word;border-collapse: collapse !important;vertical-align: top;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%'> <span></span> </td></tr></tbody> </table> </td></tr></tbody> </table> </div></div></div></div></div></div>";
    email_message+="<div style='background-color:#E3E8E5;'> <div style='Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #FFFFFF;' class='block-grid '> <div style='border-collapse: collapse;display: table;width: 100%;background-color:#FFFFFF;'> <div class='col num12' style='min-width: 320px;max-width: 600px;display: table-cell;vertical-align: top;'> <div style='background-color: transparent; width: 100% !important;'> <div style='border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;'> <div align='center' class='img-container center autowidth fullwidth ' style='padding-right: 0px; padding-left: 0px;'> <img class='center autowidth fullwidth' align='center' border='0' src='https://callanswering-images.s3.amazonaws.com/CallAnsweringemail+splash.jpg' alt='' title='' style='outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: 0;height: auto;float: none;width: 100%;max-width: 600px' width='600'> </div></div></div></div></div></div></div>";
    email_message+="<div style='background-color:#E3E8E5;'> <div style='Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #FFFFFF;' class='block-grid '> <div style='border-collapse: collapse;display: table;width: 100%;background-color:#FFFFFF;'> <div class='col num12' style='min-width: 320px;max-width: 600px;display: table-cell;vertical-align: top;'> <div style='background-color: transparent; width: 100% !important;'> <div style='border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;'> <div class=''> <div style='line-height:150%;color:#555555;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 5px;'> <div style='line-height:18px;font-size:12px;color:#555555;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;'> <p style='margin: 0;font-size: 12px;line-height: 18px;text-align: center'> <span style='font-size: 24px; line-height: 36px;'> <strong> <span style='line-height: 36px; font-size: 24px;'>";
    email_message+="<span style='line-height: 36px; font-size: 24px;'>Hi "+user_name+", <br></span> ";
    email_message+="</span></strong> </span> </p><p style='margin: 0;line-height: 18px;text-align: center;font-size: 12px'>&#160; <br></p><p style='margin: 0;line-height: 18px;text-align: center;font-size: 12px'> <span style='font-size: 18px; line-height: 27px;'>Welcome to CallAnswering!</span> </p><p style='margin: 0;line-height: 18px;text-align: center;font-size: 12px'>&#160; <br></p><p style='margin: 0;line-height: 18px;text-align: center;font-size: 12px'> <span style='font-size: 18px; line-height: 27px;'>Thank you for choosing us as your call support solution. </span> </p><p style='margin: 0;line-height: 18px;text-align: center;font-size: 12px'>&#160; <br></p><p style='margin: 0;line-height: 18px;text-align: center;font-size: 12px'> <span style='font-size: 18px; line-height: 27px;'>We are setting up your account on our service. Your verification code is as follow:</span> </p><p style='margin: 0;line-height: 18px;text-align: center;font-size: 12px'>&#160; <br></p><p style='margin: 0;line-height: 18px;text-align: center;font-size: 12px'>";
    email_message+="<span style='font-size: 18px; line-height: 27px;'> <strong>Log-In</strong>: "+email+"</span> </p><p style='margin: 0;line-height: 18px;text-align: center;font-size: 12px'> <span style='font-size: 18px; line-height: 27px;'> <strong>Verification Code</strong>: "+password+"</span> </p>";
    email_message+=" </td></tr></tbody> </table> </body></html>";
    return email_message;
}
