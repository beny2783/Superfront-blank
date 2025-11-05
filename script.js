// Enhanced interactivity and animations

document.addEventListener('DOMContentLoaded', function() {
    const outputItems = document.querySelectorAll('.output-item');
    
    // Add click handlers with visual feedback
    outputItems.forEach((item, index) => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 107, 74, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
            
            // Future: Add navigation or interaction logic here
            console.log('Clicked:', this.textContent);
        });
        
        // Stagger animation on load
        item.style.animationDelay = `${0.8 + index * 0.1}s`;
        item.style.opacity = '0';
        item.style.animation = 'fadeInUp 0.5s ease-out forwards';
    });
    
    // Add subtle parallax effect on mouse move
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
        
        const content = document.querySelector('.content');
        if (content) {
            content.style.transform = `translate(${mouseX * 0.3}px, ${mouseY * 0.3}px)`;
        }
    });
});

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

