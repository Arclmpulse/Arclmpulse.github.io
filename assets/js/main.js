/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 20

		};

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1800px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile) {

			// Turn on touch mode.
				$body.addClass('is-touch');

			// Height fix (mostly for iOS).
				window.setTimeout(function() {
					$window.scrollTop($window.scrollTop() + 1);
				}, 0);

		}

		

	// Footer.
		breakpoints.on('<=medium', function() {
			$footer.insertAfter($main);
		});

		breakpoints.on('>medium', function() {
			$footer.appendTo($header);
		});

	// Header.

		// Parallax background.

			// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				if (browser.name == 'ie'
				||	browser.mobile)
					settings.parallax = false;

			if (settings.parallax) {

				breakpoints.on('<=medium', function() {

					$window.off('scroll.strata_parallax');
					$header.css('background-position', '');

				});

				breakpoints.on('>medium', function() {

					$header.css('background-position', 'left 0px');

					$window.on('scroll.strata_parallax', function() {
						$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
					});

				});

				$window.on('load', function() {
					$window.triggerHandler('scroll');
				});

			}

			document.addEventListener('DOMContentLoaded', function() {
				// Select all links with hashes
				var links = document.querySelectorAll('a[href^="#"]');
				
				// Loop through each link
				links.forEach(function(link) {
					// Attach click event handler to each link
					link.addEventListener('click', function(e) {
						// Prevent default behavior
						e.preventDefault();
						
						// Get target section ID from link's href attribute
						var targetId = this.getAttribute('href').substring(1);
						
						// Find the target section
						var targetSection = document.getElementById(targetId);
						
						// Scroll to the target section smoothly
						targetSection.scrollIntoView({
							behavior: 'smooth'
						});
					});
				});
			});

		
			  

	// Main Sections: Two.

// Lightbox gallery.
$window.on('load', function () {
    $('#two').poptrox({
        caption: function ($a) {
            // Check if the data-caption attribute is present
            if ($a.attr('data-caption')) {
                return $a.attr('data-caption');
            } else {
                return $a.next('h3').text();
            }
        },
        overlayColor: '#2c2c2c',
        overlayOpacity: 0.85,
        popupCloserText: '',
        popupLoaderText: '',
        selector: '.work-item a.image, .extra-image-trigger',
        usePopupCaption: true,
        usePopupDefaultStyling: false,
        usePopupEasyClose: false,
        usePopupNav: true,
        windowMargin: (breakpoints.active('<=small') ? 0 : 50),

    });
});

$(document).ready(function () {
    // Get references to the static image and animated GIF
    var staticImage = $('#gifImage');
    var animatedGif = $('#animatedGif');

    // Toggle between static image and animated GIF on click
    $('.popup-link').click(function (e) {
        e.preventDefault();

        // Toggle visibility
        staticImage.toggle();
        animatedGif.toggle();
    });
});

document.addEventListener("DOMContentLoaded", function() {
	// Wait for the DOM to be fully loaded
  
	// Get the image element
	var image = document.querySelector('.lightbox .lb-image img');
  
	// Check if the image has loaded
	if (image.complete) {
	  setCaptionWidth();
	} else {
	  // If the image is not yet loaded, wait for the 'load' event
	  image.addEventListener('load', setCaptionWidth);
	}
  
	// Function to set the max-width of the caption
	function setCaptionWidth() {
	  // Get the caption element
	  var caption = document.querySelector('.lb-caption', ".lb-innerContainer", ".lb-outerContainer");
  
	  // Set the max-width of the caption to match the image's width
	  caption.style.maxWidth = image.width + 'px';
	}
  });

			function zoomImage() {
				var imageContainer = document.getElementById('zoomableImage');
				var overlay = document.getElementById('overlay');
			
				// Toggle the zoomed class on the image container
				imageContainer.classList.toggle('zoomed');
			
				// Toggle the overlay to show or hide
				overlay.style.display = (overlay.style.display === 'none' || overlay.style.display === '') ? 'block' : 'none';
			}

			document.addEventListener('DOMContentLoaded', function () {
				// Get the necessary elements
				var learnMoreButton = document.getElementById('learn-more-button');
				var overlay = document.getElementById('custom-overlay');
				var closeOverlayButton = document.getElementById('close-overlay');
			
				// Add click event listener to the "Learn More" button
				learnMoreButton.addEventListener('click', function () {
					overlay.style.visibility = 'visible'; // Make the overlay visible
					overlay.classList.add('active'); // Add the 'active' class
					document.body.classList.add('overlay-active'); // Add a class to body to prevent scrolling
					learnMoreButton.style.display = 'none'; // Hide the "Learn More" button
				});
			
				// Add click event listener to the "Close" button in the overlay
				closeOverlayButton.addEventListener('click', function () {
					overlay.style.visibility = 'hidden'; // Hide the overlay
					overlay.classList.remove('active'); // Remove the 'active' class
					document.body.classList.remove('overlay-active'); // Remove the class from body
					learnMoreButton.style.display = 'inline-block'; // Show the "Learn More" button
				});
			});
			document.addEventListener("DOMContentLoaded", function() {
				// Get the width of the image
				var imageWidth = document.querySelector('.lb-image').offsetWidth;
			
				// Set the width of the .lb-caption to match the image width
				document.querySelector('.lb-caption').style.width = imageWidth + 'px';
			});
			
			function openOverlay() {
				document.querySelector('.wacky-overlay').classList.toggle('open');
			  }


			  
		
			
    
})(jQuery);