const content = {
    home: "<h1>Welcome to Our SPA</h1><p>This is the home page of cn.</p>",
    about: "<h1>About Us</h1><p>Learn more about our company.</p>",
    services: "<h1>Our Services</h1><p>Discover what we offer.</p>",
    contact: "<h1>Contact Us</h1><p>Get in touch with us.</p>"
};

function navigate(page) {
    document.getElementById('content').innerHTML = content[page];
}

// Load the home page by default
navigate('home');
