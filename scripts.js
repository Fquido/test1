  
// Targeting video element  
let clip = document.querySelector("video") 
let clip1 = document.querySelector(".play") 

/* Applying mouseover event on video clip  
and then we call play() function to play  
the video when the mouse is over the video */ 
clip1.addEventListener("click", function (e) { 
	document.getElementById("zdj").style='transition: opacity 550ms; opacity: 0.0';
	clip1.style='transition: opacity 550ms; opacity: 0.0';
	setTimeout(() => {
		clip1.style='display: none';
	  }, "5");
	clip.play();
}) 


/* Applying mouseout event on video clip  
and then we call pause() function to stop  
the video when the mouse is out the video */ 
clip.addEventListener("mouseout", function (e) { 
	document.getElementById("zdj").style='transition: opacity 650ms; opacity: 4.0';
	clip1.style='transition: opacity 650ms; opacity: 4.0';
	clip.pause(); 
}) 