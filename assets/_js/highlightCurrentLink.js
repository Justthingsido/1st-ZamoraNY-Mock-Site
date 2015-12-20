
//set currecnt page link as active

    $(document).ready(function(){

//hihglights links in project section
        $('.proj-list li').click(function(){
             $('.proj-list li').removeClass('current');
             $(this).addClass('current');
        });

        $('.proj-list li').click(function(){
          $('.proj-list .proj-slideshow').addClass('betteryou');
          $(this).removeClass('betteryou');

        })
    });
