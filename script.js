$(document).ready(function(){
    $('.secondary-button2').click(function(){
        $(this).find('.faq_text').fadeToggle(200);
        });
});

window.onload = function() {
    const entryElements = $('.slider-item');
    let entryIndex = 0;

    $('.sp_right').click(function(){
    //change the number below if u added more sponsors
    if(entryIndex!=2){
        entryIndex++;
        entryElements.hide();
        $(entryElements[entryIndex]).fadeIn(1000);
    }});

    $('.sp_left').click(function(){
    if(entryIndex!=0){
        entryIndex--;
        entryElements.hide();
        $(entryElements[entryIndex]).fadeIn(1000);
    }});

    const entryElements1 = $('.slider-item1');
    let entryIndex1 = 0;

    $('.mp_right').click(function(){
    //change the number below if u added more media partners
    if(entryIndex1!=2){
        entryIndex1++;
        entryElements1.hide();
        $(entryElements1[entryIndex1]).fadeIn(1000);
    }});

    $('.mp_left').click(function(){
    if(entryIndex1!=0){
        entryIndex1--;
        entryElements1.hide();
        $(entryElements1[entryIndex1]).fadeIn(1000);
    }});
}

$(document).ready(function() {
    function checkLazyLoading() {
        // check elements that are still hidden
        $('.lazyload').each( function(i){
            // middle of object and current viewport
            var
                middle = $(this).offset().top + ($(this).outerHeight() / 4),
                top = $(window).scrollTop(),
                bottom = top + $(window).height()
            ;

            // if the object is half visibile, show it
            if (top < middle && middle < bottom) {
                $(this)
                    // remove class, since we're already loading this element
                    .removeClass('lazyload')
                    // animate to visibile
                    .animate({'opacity':'1'}, 500)
                ;
            }
        }); 
    }

    // @see http://ejohn.org/blog/learning-from-twitter/
    var scrollHappened = false;
    $(window).scroll(function() {
        scrollHappened = true;
    });
    setInterval(function() {
        if (scrollHappened) {
            scrollHappened = false;
            checkLazyLoading();
        }
    });
});

  function scrollResults(direction) {
    const container = document.getElementById('resultsContainer');
    const scrollAmount = 100; // Adjust this value to control scroll speed
    
    if (direction === 'up') {
      container.scrollBy({
        top: -scrollAmount,
        behavior: 'smooth'
      });
    } else {
      container.scrollBy({
        top: scrollAmount,
        behavior: 'smooth'
      });
    }
  }

// Auto-scroll functionality
function autoScroll() {
  const container = document.getElementById('resultsContainer');
  const scrollHeight = container.scrollHeight;
  const clientHeight = container.clientHeight;
  const maxScroll = scrollHeight - clientHeight;
  
  // If we're at the bottom, scroll back to top
  if (container.scrollTop >= maxScroll) {
    container.scrollTop = 0;
  } else {
    container.scrollBy({
      top: 1, // Scroll by 1 pixel for smooth movement
      behavior: 'auto'
    });
  }
}

// Global variables
let teamData = [];
let scrollInterval;

// Load team and college data
document.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await fetch('phase1Win.json');
        teamData = await response.json();
        
        if (!teamData || teamData.length === 0) {
            console.error('No data found in JSON file');
            return;
        }

        updateResultsList(teamData);
        
        // Initialize auto-scroll after data is loaded
        const resultsContainer = document.getElementById('resultsContainer');
        
        resultsContainer.addEventListener('mouseenter', () => {
            clearInterval(scrollInterval);
        });

        resultsContainer.addEventListener('mouseleave', () => {
            scrollInterval = setInterval(autoScroll, 30);
        });

        // Start initial auto-scroll
        scrollInterval = setInterval(autoScroll, 30);
        
    } catch (error) {
        console.error('Error loading JSON file:', error);
        // Fallback data in case of error
        const resultsList = document.getElementById('resultsList');
        resultsList.innerHTML = `
            <li>🏆 Team Innovators - College of Engineering Trivandrum</li>
            <li>🏆 Tech Wizards - Government Engineering College Thrissur</li>
            <li>🏆 Code Masters - TKM College of Engineering</li>
            <li>🏆 Binary Brigade - NSS College of Engineering</li>
            <li>🏆 Digital Dynamos - Model Engineering College</li>
            <li>🏆 Cyber Knights - College of Engineering Chengannur</li>
        `;
    }
});

function updateResultsList(data) {
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = ''; // Clear existing items

    data.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = `🏆 ${item['TEAM']} - ${item['COLLEGE']}`;
        resultsList.appendChild(li);
    });

    // If no valid entries were added
    if (resultsList.children.length === 0) {
        resultsList.innerHTML = '<li>No valid entries found</li>';
    }
}

// Modal functions
function openModal() {
    const modal = document.getElementById('listModal');
    const completeList = document.getElementById('completeList');
    
    // Clear existing items
    completeList.innerHTML = '';
    
    // Copy items from the global teamData
    teamData.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = `🏆 ${item['TEAM']} - ${item['COLLEGE']}`;
        completeList.appendChild(li);
    });
    
    modal.style.display = 'block';
    
    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };
}

function closeModal() {
    const modal = document.getElementById('listModal');
    modal.style.display = 'none';
}

// Add keyboard support for closing modal
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Fetch and display participants data from phase1part.json
fetch('phase1part.json')
  .then(response => response.json())
  .then(data => {
    const participantsList = document.getElementById('participantsList');
    const completeParticipantsList = document.getElementById('completeParticipantsList');

    data.forEach(participant => {
      const listItem = document.createElement('li');
      listItem.textContent = `${participant['Team Name']} - ${participant['College']}`;
      participantsList.appendChild(listItem.cloneNode(true));
      completeParticipantsList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error fetching participants data:', error));

function scrollParticipants(direction) {
  const container = document.getElementById('participantsContainer');
  if (direction === 'up') {
    container.scrollTop -= 100;
  } else {
    container.scrollTop += 100;
  }
}

function openParticipantsModal() {
  document.getElementById('participantsModal').style.display = 'block';
}

function closeParticipantsModal() {
  document.getElementById('participantsModal').style.display = 'none';
}

// Auto-scroll functionality for participants
let participantsScrollInterval;

function startAutoScrollParticipants() {
  participantsScrollInterval = setInterval(() => {
    const container = document.getElementById('participantsContainer');
    container.scrollTop += 1;
    if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
      container.scrollTop = 0;
    }
  }, 50); // Adjust the speed of scrolling by changing the interval
}

function stopAutoScrollParticipants() {
  clearInterval(participantsScrollInterval);
}

// Start auto-scroll when the page loads
window.addEventListener('load', startAutoScrollParticipants);

// Stop auto-scroll when user interacts with the scroll buttons
const scrollButtons = document.querySelectorAll('.scroll-btn');
scrollButtons.forEach(button => {
  button.addEventListener('click', stopAutoScrollParticipants);
});
