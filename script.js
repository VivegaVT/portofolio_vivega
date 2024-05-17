document.addEventListener('DOMContentLoaded', function() {
    const nameTitle = document.getElementById('name-title');
    const description = document.getElementById('description');

    nameTitle.addEventListener('mouseenter', function() {
        description.style.display = 'block';
        description.style.opacity = '0';
        setTimeout(function() {
            description.style.opacity = '1';
            description.style.transition = 'opacity 0.3s';
        }, 0);
    });

    nameTitle.addEventListener('mouseleave', function() {
        description.style.opacity = '0';
        description.style.transition = 'opacity 0.3s';
        setTimeout(function() {
            description.style.display = 'none';
        }, 300);
    });
});

