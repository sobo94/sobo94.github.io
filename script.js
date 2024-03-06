document.addEventListener('DOMContentLoaded', function () {
    // Flourish embed URLs for each page
    const flourishEmbeds = [
        'story/2152615/page-1',
        'story/2152615/page-2',
        'story/2152615/page-3',
        'story/2152615/page-4',
        'story/2152615/page-5',
        'story/2152615/page-6',
    ];

    // Get the pagination buttons and Flourish embed container
    const paginationButtons = document.querySelectorAll('.pagination button');
    const flourishContainer = document.querySelector('.flourish-embed');

    // Add click event listeners to pagination buttons
    paginationButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            paginationButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to the clicked button
            button.classList.add('active');

            // Update the Flourish embed source with the corresponding URL
            flourishContainer.setAttribute('data-src', flourishEmbeds[index]);

            // Reload the Flourish embed script
            const script = document.createElement('script');
            script.src = 'https://public.flourish.studio/resources/embed.js';
            script.async = true;

            // Remove the existing script to reload Flourish embed
            const existingScript = document.querySelector('.flourish-embed script');
            existingScript.parentNode.replaceChild(script, existingScript);
        });
    });

    // Display the first page by default
    paginationButtons[0].click();
});
