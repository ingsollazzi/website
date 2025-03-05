class Slideshow {
    constructor() {
        this.slideIndex = 1;
        this.slides = document.getElementsByClassName("mySlides");
        this.interval = null;
        this.intervalDuration = 3000;
        
        // Initialize slideshow
        this.showSlides(this.slideIndex);
        this.startAutoplay();
        this.initializeEventListeners();
    }

    // Start automatic slideshow
    startAutoplay() {
        this.interval = setInterval(() => {
            this.plusSlides(1);
        }, this.intervalDuration);
    }

    // Stop automatic slideshow
    stopAutoplay() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    // Navigate to next/previous slide
    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    // Go to specific slide
    currentSlide(n) {
        this.showSlides(this.slideIndex = n);
    }

    // Display slides
    showSlides(n) {
        // Reset to first slide if we've gone past the end
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }
        
        // Go to last slide if we've gone before the first
        if (n < 1) {
            this.slideIndex = this.slides.length;
        }
        
        // Hide all slides
        Array.from(this.slides).forEach(slide => {
            slide.style.display = "none";
        });
        
        // Show the current slide
        this.slides[this.slideIndex - 1].style.display = "block";
    }

    // Set up event listeners
    initializeEventListeners() {
        // Pause on hover
        document.querySelector('.slideshow-container').addEventListener('mouseenter', () => {
            this.stopAutoplay();
        });

        // Resume on mouse leave
        document.querySelector('.slideshow-container').addEventListener('mouseleave', () => {
            this.startAutoplay();
        });

        // Navigation buttons
        document.querySelector('.prev').addEventListener('click', () => {
            this.plusSlides(-1);
        });

        document.querySelector('.next').addEventListener('click', () => {
            this.plusSlides(1);
        });
    }
}

// Initialize slideshow when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Slideshow();
}); 