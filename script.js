$(document).ready(function() {
    // Show signup form
    $('#showSignup').click(function(e) {
        e.preventDefault();
        $('#loginSection').addClass('d-none');
        $('#signupSection').removeClass('d-none');
    });

    // Show login form
    $('#showLogin').click(function(e) {
        e.preventDefault();
        $('#signupSection').addClass('d-none');
        $('#loginSection').removeClass('d-none');
    });

    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
        // Handle login logic here
        alert('Login attempted with email: ' + $('[name="email"]').val());
    });

    $('#signupForm').on('submit', function(e) {
        e.preventDefault();
        // Handle signup logic here
        alert('Sign up attempted with email: ' + $('#signupEmail').val());
    });
    $('#darkModeToggle').click(function() {
    $('body').toggleClass('dark-mode');
    $('#darkModeIcon').toggle();
    $('#lightModeIcon').toggle();
    });
    
});
function createStars(numStars) {
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * window.innerWidth + 'px';
        star.style.top = Math.random() * window.innerHeight + 'px';
        star.style.animationDuration = Math.random() * 1.5 + 0.5 + 's'; // Vary twinkling speed
        document.body.appendChild(star);
    }
}

// Call createStars when dark mode is activated
$('#darkModeToggle').click(function() {
    $('body').toggleClass('dark-mode');
    $('#darkModeIcon').toggle();
    $('#lightModeIcon').toggle();
    if ($('body').hasClass('dark-mode')) {
        createStars(100); // Create 100 stars in dark mode
    } else {
        $('.star').remove(); // Remove stars in light mode
    }
    
    
});

