// hge-bootsrap Zim template common functions for single-page and multi-page variants
var sideMenuState;
var btnScrollUp;

$(document).ready(function() {
  $('img').addClass( "img-fluid" );

  // Initialize highlightjs class and elements
    hljs.highlightAll();

// Code for toggling show/hide side menu, to have more space to read the contents
  sideMenuState = 'show';
  $('#toggleSideMenu').click(function() {
    if (sideMenuState =='show') {
      $('#sidebarMenu').addClass( "d-none" );

      $('#sidebarMenuNav').removeClass( "col-md-3 col-lg-2 d-md-block" );
      $('#sidebarMenuNav').addClass( "d-none" );

      $('#pageContents').removeClass( "col-md-9 col-lg-10" );
      $('#pageContents').addClass( "col-md-12" );

      sideMenuState = 'hide';
    }
    else{

      $('#sidebarMenu').removeClass( "d-none" );

      $('#sidebarMenuNav').removeClass( "d-none" );
      $('#sidebarMenuNav').addClass( "col-md-3 col-lg-2 d-md-block" );

      $('#pageContents').removeClass( "col-md-12" );
      $('#pageContents').addClass( "col-md-9 col-lg-10" );

      sideMenuState = 'show';
    }
  });

  //Code for Scroll up element 
  // (Taken from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top )
    btnScrollUp = document.getElementById("scrollUp");

  // If you scroll down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
});



  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btnScrollUp.style.display = "block";
    } else {
      btnScrollUp.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }