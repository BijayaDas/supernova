$(document).ready(function() {        
	
	/* ======= Fullpage.js ======= */ 
	/* Ref: https://github.com/alvarotrigo/fullPage.js */
        
    $('#fullpage').fullpage({
		anchors: ['home', 'mobile_dev', 'web_dev', 'ai_auto', 'data_service', 'press'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Home', 'Mobile Development', 'Web Development', 'AI & Automation', 'Data Science & Analytics', 'Press'],
		resize : false,
		scrollBar: true,
		autoScrolling: false,
		paddingTop: '120px'
		
	});
    

});