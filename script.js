        var navLinks = document.getElementById("navLinks");
	
		function showMenu(){
			navLinks.style.right = "0";
		}
		function hideMenu(){
			navLinks.style.right = "-200px";
		}

		topButton = document.getElementById("toTop");

		window.onscroll = function() {scrollFunction()};

		function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			topButton.style.display = "block";
		} else {
			topButton.style.display = "none";
		}
		}

		function topFunction() {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		}