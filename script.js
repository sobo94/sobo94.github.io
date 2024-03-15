// script.js 
document.addEventListener('DOMContentLoaded', function () {

    // Get the container for pagination buttons
    var paginationContainer = document.querySelector('.pagination');

    
    var divElements = [
        '<div class="main-portion" style="max-width:2000px"><div class="flourish-embed" data-src="story/2152615"><script src="https://public.flourish.studio/resources/embed.js"></script></div></div>',
        '<div id="div3">Content for div 3</div>'
    ];



    // Set the total number of pages
    var totalPages = divElements.length;


    // Create pagination buttons
    for (var i = 1; i <= totalPages; i++) {
        var button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', handlePaginationClick);
        paginationContainer.appendChild(button);
    }

    // Function to handle pagination button click
    function handlePaginationClick(event) {
        // Remove the 'active' class from all buttons
        var buttons = document.querySelectorAll('.pagination button');
        buttons.forEach(function (button) {
            button.classList.remove('active');
        });

        // Add the 'active' class to the clicked button
        event.target.classList.add('active');

        // Get the index of the clicked button (assuming it starts from 1)
        var pageIndex = parseInt(event.target.textContent) - 1;

        // Change the data-src value based on the clicked button
        var flourishEmbed = document.querySelector('.main-portion');
        flourishEmbed.innerHTML = divElements[pageIndex];
    }
 
});

