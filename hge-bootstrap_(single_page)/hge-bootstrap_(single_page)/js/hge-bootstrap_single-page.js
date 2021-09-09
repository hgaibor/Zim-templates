// hge-bootsrap Zim template single-page functions

// Variable to customize ToC heading display and uncollapsed element options
	// So you don't have to scroll all the way down to the JS code
	var globalShowHeaderLevel = 3;
	var globalHeadingSelector = 'h1,h2,h3,h4';


$(document).ready(function() {

	// Assign IDs to each heading element this is required by Tocbot component to work properly
		$( 'h1' ).each(function( index ) { 
		  var h1HrefId = sanitizeURL($("a",this).attr('name'));
		  $(this).attr("id",h1HrefId+"-"+index);
		});

		$( 'h2' ).each(function( index ) { 
		  var h2HrefId = sanitizeURL($("a",this).attr('name'));
		  $(this).attr("id",h2HrefId+"-"+index);
		});

		$( 'h3' ).each(function( index ) { 
		  var h3HrefId = sanitizeURL($("a",this).attr('name'));
		  $(this).attr("id",h3HrefId+"-"+index);
		});

		$( 'h4' ).each(function( index ) { 
		  var h4HrefId = sanitizeURL($("a",this).attr('name'));
		  $(this).attr("id",h4HrefId+"-"+index);
		});

		$( 'h5' ).each(function( index ) { 
		  var h5HrefId = sanitizeURL($("a",this).attr('name'));
		  $(this).attr("id",h5HrefId+"-"+index);
		});

	// Initialize and generate Tocbot element
	  tocbot.init(setTocbotOptions(globalShowHeaderLevel, globalHeadingSelector));

	$('.toc-list').attr("id","toc-index");
	$('#toc-index').addClass( "list-group" );

});

// Sanitize heading names before assigning the Id to each heading
  function sanitizeURL(unsafeName){
    var unsafeChars = /[& +$,:;=?@"#{}|^~[`%!'<>\]\.\/\(\)\*\\\n\t\b\v]/g,
      safeHrefId;

    // Normalizing URL-safe chars
    safeHrefId = unsafeName
      .trim()
      .replace(/ /gi, "-")
      .replace(/\'/gi, "")
      .replace(unsafeChars, "-")
      .replace(/-{2,}/g, "-")
      .substring(0, 64)
      .replace(/^-+|-+$/gm, "")
      .replace(/á/g, "a")
      .replace(/é/g, "e")
      .replace(/í/g, "i")
      .replace(/ó/g, "o")
      .replace(/ú/g, "u")
      .replace(/ñ/g, "n")
      .replace(/ä/g, "a")
      .replace(/^-+|-+$/gm, "")
      .replace(/^-+|-+$/gm, "")
      .toLowerCase(); 
    return safeHrefId;
  }


// Function to allow TocBot to get custom depth without breaking existing code
  // https://www.cssscript.com/highly-customizable-table-contents-generator-tocbot/
  // https://github.com/tscanlin/tocbot/
  function setTocbotOptions($showHeadinglevel=0, $strHeadingSelectors='h1,h2') {
    var showHeadinglevelIndex = 0;
    var headingSelectorIndex = $strHeadingSelectors.trim().slice(-1);

    if ($showHeadinglevel == 0) {
      showHeadinglevelIndex = 1;
    }
    else{
      showHeadinglevelIndex = $showHeadinglevel;
    }

    $('.setCollapseLevel').removeClass('active');
    $('#setCollapseLevelH'+showHeadinglevelIndex).addClass('active');

    $('.setHeadingSelector').removeClass('active');
    $('#setHeadingSelectorH'+headingSelectorIndex).addClass('active');

      // Setting Tocbot options in a JSON variable to allow some dynamic changes in the rendering of the Toc element.
      // Variable information can be found at author's link: https://github.com/tscanlin/tocbot
      var JSONTocbotOptions = {
        // Where to render the table of contents.
        tocSelector: '#sidebarMenu',
        // Where to grab the headings to build the table of contents.
        contentSelector: '#pageContents',
        // Which headings to grab inside of the contentSelector element.
        // headingSelector: 'h1, h2, h3, h4, h5, h6',
        headingSelector: $strHeadingSelectors,
        // For headings inside relative or absolute positioned containers within content.
        hasInnerContainers: false,
        // Offset to compensate the height of the navbar
        headingsOffset: 40,
        scrollSmoothOffset: -40,
        fixedSidebarOffset: 'auto',
        orderedList: false,
        collapseDepth: $showHeadinglevel,
        // Refresh time to auto-position the content currently viewed vs the element at toc
        throttleTimeout: 50, 

        // Class to add to active links,
        activeLinkClass: 'list-group-item list-group-item-primary list-style-active',
        // Class to add to list items.
        listItemClass: 'list-group-item list-group-item-action list-group-flush list-style',
      };
      return JSONTocbotOptions;
    };

// Modify Tocbot show heading parameters and 
  // refresh the table to show the ToC tree opened until those elements
  function changeTocbotShowHeadingLevel($showHeadingLevel, ref){
    globalShowHeaderLevel = $showHeadingLevel;
    tocbot.refresh(setTocbotOptions(globalShowHeaderLevel, globalHeadingSelector));
  }

// Modify Tocbot heading lookout parameters and 
  // refresh the table to include all the elements considered on the search
  function changeTocbotHeadingSelectors($strHeadingSelectors,ref){
    globalHeadingSelector = $strHeadingSelectors;
    tocbot.refresh(setTocbotOptions(globalShowHeaderLevel, globalHeadingSelector));
  }

