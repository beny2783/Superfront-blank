// Enhanced interactivity and animations

document.addEventListener('DOMContentLoaded', function() {
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

