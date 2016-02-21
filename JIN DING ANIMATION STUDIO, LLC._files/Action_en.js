$(document).ready(function () {
    $("#mid_c2_c2").hide();$("#mid_c2_c3").hide();
    $(".mid_c4_c").hide();
    $(".mid_c2_c2_c").hide();
    $("#top_left_u1").css({'visibility' : 'visible'});
    $("#mid_c2_i1").css({'text-decoration':'underline'})
    $("#mid_c2_i1,#mid_c2_i2,#mid_c2_i3").hover(function() {$(this).css({'font-weight' : '900'})},function() {$(this).css({'font-weight' : '100'})});
    $(".mid_c2_c3_mi img,#mid_c2_c2_m2 img").mouseover(function(){
        str = $(this).attr("src");
        $(this).attr("src",str.slice(0,5)+"_.jpg");});
    $(".mid_c2_c3_mi img,#mid_c2_c2_m2 img").mouseout(function(){
        str = $(this).attr("src");
        $(this).attr("src",str.slice(0,5)+".jpg");});
    $(".mid_c4_t").click(function () {
    $(".mid_c4_c").slideUp("50");
    if ($(".mid_c4_c",this).is(":hidden")) {
        $(".mid_c4_c",this).slideDown("slow");} 
    else {
        $(".mid_c4_c",this).slideUp("slow");} 
    });
 
  
     $(".mid_c2_c2_m").click(function () {
    $(".mid_c2_c2_c").slideUp("100");
    if ($(".mid_c2_c2_c",this).is(":hidden")) {
        $(".mid_c2_c2_c",this).slideDown("100");} 
    else {
        $(".mid_c2_c2_c",this).slideUp("500");} 
    });
 
     });

function ClickTopList(underline,content){
$("#mid_content_1,#mid_content_2,#mid_content_3,#mid_content_4,#mid_content_5,#mid_content_6").hide();
$(".top_left_u,.top_right_u").css({'visibility' : 'hidden'});
$("#"+underline).css({'visibility' : 'visible'});
$("#"+content).fadeIn("600");
}


function RoleMoveOut(x,y,MyID,RoleID){
$("#"+RoleID).css({'visibility':'visible'});
RoleAction(x,y,RoleID);
}
function RoleMoveIn(x,y,MyID,RoleID){
$("#"+RoleID).css({'visibility':'hidden'});
RoleAction(x,y,RoleID);
}
function RoleAction(x,y,RoleID){
$("#"+RoleID).animate({"margin-left":x,"margin-top":y},100);
}

function LogoRole(state){
if(state==0){
$(".top_mid_c_").css({'visibility':'visible'});
RoleAction('-=25','-=20','top_mid_c1_');
RoleAction('-=30','-=0','top_mid_c2_');
RoleAction('-=0','+=20','top_mid_c3_');
RoleAction('+=50','-=0','top_mid_c4_');
RoleAction('+=30','-=25','top_mid_c5_');
}
else{
RoleAction('+=25','+=20','top_mid_c1_');
RoleAction('+=30','-=0','top_mid_c2_');
RoleAction('-=0','-=20','top_mid_c3_');
RoleAction('-=50','-=0','top_mid_c4_');
RoleAction('-=30','+=25','top_mid_c5_');
$(".top_mid_c_").css({'visibility':'hidden'});
}}

function MidContent2Index(MyID,ObjID,TittleStr,b_hight){
if ($("#"+ObjID).is(":hidden"))
    {
    $("#mid_c2_c1,#mid_c2_c2,#mid_c2_c3").slideUp("50");
    $("#mid_c2_i1,#mid_c2_i2,#mid_c2_i3").css({'text-decoration':'none'});
    $("#mid_c2_i1").html("Company Info+");
    $("#mid_c2_i2").html("Project Team+");
    $("#mid_c2_i3").html("Young Artist Corner+");
    $("#mid_content_2,#mid").css({'height':b_hight});
    $("#"+ObjID).slideDown("50");
    $("#"+MyID).html(TittleStr);
    $("#"+MyID).css({'text-decoration':'underline'});
    }
}

