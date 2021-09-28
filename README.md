# HG-bootstrap responsive Zim Wiki template
I've been an enthusiast user of Zim Wiki for a while now, as I loved the simplicity of how it handled the data on the different entries that were created. It also is Cloud-search friendly since I use it along web storage. 

However despite all the awesome features I did not find a responsive template to I decided to give it a shot and make one based on what I needed when exporting my Wikis. 

I hope this template is very useful to you as well! 

Zim wiki application developer and main program at: https://github.com/jaap-karssenberg/zim-wiki

## Features 
- Powered by Bootstrap and jQuery!
- Responsive design
- Mobile friendly
- Dynamic ToC generation *(only single-page variant)*
- Scroll to top, print, and toggle menu options
- Code formatting and highlighting

There are two variants of the same template:
- **single-page:** when you export all pages to a single file. Since multi-page export from Zim won't render every index of every html file similarly, I left default `index()` function and applied the bootstrap styles and code formatting functionality. 
- **multi-page:** when you export all pages to a multiple files. This one allows for more options at the time of rendering the table of contents for the wiki, like selecting un-collapsed heading level to show on the table and what heading elements to consider when building the ToC. 


## Installation instructions 
1. Copy the desired template html file and folder to the *templates* folder of Zim Wiki, usually found at [Path\to\ZimWiki]\share\zim\templates\html
2. Export your wiki using either multi-page or single-page templates

## Components used from other sources: 
- **jQuery.-** v3.6.0 https://github.com/jquery/jquery
- **Bootstrap.-** v4.0 https://github.com/twbs/bootstrap
- **Tocbot.-** v4.2.0 https://github.com/tscanlin/tocbot/
- **highlightjs.-** v11.2.0 https://github.com/highlightjs/highlight.js
- **Zim Wiki template icons.-** https://github.com/ecodiv/ZIM-templates/tree/master/AltDefault
