        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Carousel functionality
        const carouselItems = document.querySelectorAll('.carousel-item');
        const indicators = document.querySelectorAll('.carousel-indicator');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        let currentSlide = 0;
        let autoPlayInterval;
        
        function showSlide(index) {
            carouselItems.forEach(item => item.classList.remove('active'));
            indicators.forEach(ind => {
                ind.classList.remove('active-indicator', 'bg-white/70');
                ind.classList.add('bg-white/50');
            });
            
            carouselItems[index].classList.add('active');
            indicators[index].classList.add('active-indicator', 'bg-white/70');
            indicators[index].classList.remove('bg-white/50');
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % carouselItems.length;
            showSlide(currentSlide);
        }
        
        function prevSlide() {
            currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
            showSlide(currentSlide);
        }
        
        function startAutoPlay() {
            autoPlayInterval = setInterval(nextSlide, 5000);
        }
        
        function stopAutoPlay() {
            clearInterval(autoPlayInterval);
        }
        
        // Event listeners
        nextBtn.addEventListener('click', () => {
            stopAutoPlay();
            nextSlide();
            startAutoPlay();
        });
        
        prevBtn.addEventListener('click', () => {
            stopAutoPlay();
            prevSlide();
            startAutoPlay();
        });
        
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                stopAutoPlay();
                currentSlide = index;
                showSlide(currentSlide);
                startAutoPlay();
            });
        });
        
        // Start autoplay
        startAutoPlay();
        
        // Pause on hover
        const carousel = document.getElementById('heroCarousel');
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
  