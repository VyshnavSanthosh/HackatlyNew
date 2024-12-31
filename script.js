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

    const cards = document.querySelectorAll('#themes .card7');
    const modal = document.getElementById('popupModal');
    const modalContent = modal.querySelector('.modal-content');

    // Ensure modal is hidden initially
    modal.style.display = 'none';

    cards.forEach(card => {
        card.addEventListener('click', function () {
            const cardTitle = card.querySelector('.h63').textContent.toLowerCase();
            updateModalContent(cardTitle);
            modal.style.display = 'flex';
        });
    });

    if (modal) {
        // Close modal when clicking outside
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Close modal when clicking close button
        const closeButton = modal.querySelector('.close-button');
        if (closeButton) {
            closeButton.addEventListener('click', function () {
                modal.style.display = 'none';
            });
        }
    }

    function updateModalContent(cardTitle) {
        // Clear existing content
        modalContent.innerHTML = '<span class="close-button">&times;</span>';

        // Add new content based on the card title
        switch (cardTitle.toLowerCase()) {
            case 'robotics':
                modalContent.innerHTML += `
                    <h2>Problem Statements</h2>
                    <h3>1. Efficient Robot Task Optimization</h3>
                    <p>Develop innovative solutions that optimize task allocation, execution, and adaptation for robots in various environments, ensuring maximum efficiency, productivity, and resource utilization.</p>
                    
                    <h3>2. Robust Robot Perception and Understanding</h3>
                    <p>Create groundbreaking approaches that enhance robot perception, understanding, and interpretation of complex environments, objects, and situations, enabling informed decision-making and effective action.</p>
                    
                    <h3>3. Scalable Robot Swarms for Real-World Applications</h3>
                    <p>Design innovative solutions that facilitate the development, deployment, and management of large-scale robot swarms, ensuring efficient coordination, communication, and collaboration to tackle complex real-world challenges.</p>
                `;
                break;
            case 'tourism':
                modalContent.innerHTML += `
                    <h2>Problem Statements</h2>
                    <h3>1. Empowering Network Freedom</h3>
                    <p>Develop innovative solutions that grant users seamless control, awareness, and optimization of their network connectivity, ensuring fast, secure, and reliable access anywhere, anytime.</p>

                    <h3>2. Revolutionizing Waste Management in Tourism</h3>
                    <p>Create cutting-edge solutions that encourage responsible waste behavior among tourists, promoting a cleaner and more sustainable environment without relying on traditional enforcement methods.</p>

                    <h3>3. Personalized Travel Experience of the Future</h3>
                    <p>Develop solutions that provide personalized, immersive, and accessible travel experiences, connecting travelers with local cultures, hidden gems, and unique activities that match their interests and preferences.</p>
                `;
                break;
            case 'smart vehicle':
                modalContent.innerHTML += `
                    <h2>Problem Statements</h2>
                    <h3>1. Revolutionizing Daily Commutes</h3>
                    <p>Design innovative solutions that prioritize safety, efficiency, and enjoyment, while tackling the complexities of crowded city roads.</p>

                    <h3>2. Sustainable Transportation Evolution</h3>
                    <p>Pioneer environmentally conscious transportation solutions that minimize the ecological footprint while elevating the driving experience.</p>

                    <h3>3. Intelligent Vehicle Safety Net</h3>
                    <p>Create proactive safety solutions that anticipate and respond to potential accidents, harnessing data and real-time insights to prevent collisions and save lives.</p>

                `;
                break;
            case 'energy and environment':
                modalContent.innerHTML += `
                    <h2>Problem Statements</h2>
                    <h3>1. Revolutionizing Energy Efficiency</h3>
                    <p>Create solutions to minimize energy waste and optimize consumption in households and industries using advanced technologies to reduce costs and environmental impact.</p>

                    <h3>2. Integrated Home Energy Harvesting</h3>
                    <p>Design energy generation systems combining multiple renewable sources, offering real-time monitoring and optimization for households.</p>

                    <h3>3. Solar Energy Continuity</h3>
                    <p>Develop solutions for uninterrupted solar energy availability, addressing nighttime and peak demand challenges with innovative storage and management.</p>

                `;
                break;
            case 'fitness':
                modalContent.innerHTML += `
                    <h2>Problem Statements</h2>
                    <h3>1. Energy-Harvesting Smart Gym Equipment</h3>
                    <p>Develop gym machines that convert user energy into electricity, integrate AI for optimization, and track individual contributions via a dashboard.</p>

                    <h3>2. AI-Powered Mental Fitness Gym</h3>
                    <p>Create a virtual gym platform combining physical fitness with mental wellness, incorporating AI to monitor health and recommend personalized fitness plans.</p>

                    <h3>3. Smart Gym Equipment Maintenance System</h3>
                    <p>Develop systems for real-time monitoring and predictive maintenance of gym equipment using sensors to reduce energy consumption and improve infrastructure longevity.</p>

                `;
                break;
            case 'med-tech':
                modalContent.innerHTML += `
                    <h2>Problem Statements</h2>
                    <h3>1. Medication Adherence Revolution</h3>
                    <p>Create solutions that empower patients to manage their medication, ensuring better adherence and improved outcomes.</p>

                    <h3>2. Biobank Optimization</h3>
                    <p>Design solutions to harmonize workflows, enable real-time insights, and preserve sample integrity in biobank operations.</p>

                    <h3>3. Predictive Patient Monitoring</h3>
                    <p>Develop solutions that analyze real-time data to anticipate and prevent hospitalizations, improving patient outcomes.</p>

                `;
                break;
            case 'agriculture':
                modalContent.innerHTML += `
                    <h2>Problem Statements</h2>
                    <h3>1. Revolutionizing Red Palm Weevil Detection</h3>
                    <p>Innovate early detection systems for Red Palm Weevil infestations in coconut trees, helping farmers prevent severe crop damage.</p>

                    <h3>2. Precision Crop Nutrition</h3>
                    <p>Develop systems to predict nutrient deficiencies via leaf color analysis, allowing real-time detection and correction to optimize yields and sustainability.</p>

                    <h3>3. Smart Contract Farming Ecosystems</h3>
                    <p>Design ecosystems that enable collaboration, transparency, and mutual benefits among farmers, buyers, and stakeholders, including features like real-time communication and data-driven decision-making for sustainable agriculture.</p>

                `;
                break;
            case 'cybersecurity':
                modalContent.innerHTML += `
                    <h2>Problem Statements</h2>
                    <h3>1. Secure Immersive Experiences</h3>
                    <p>Develop solutions to protect VR/AR users from cyber threats.</p>

                    <h3>2. Protect Global Supply Chain Integrity</h3>
                    <p>Create solutions to secure supply chains, ensuring authenticity, quality, and safety of goods.</p>

                    <h3>3. Safeguard Environmental Monitoring</h3>
                    <p>Develop solutions to protect environmental monitoring systems from cyber threats.</p>
                `;
                break;
            case 'disaster management':
                modalContent.innerHTML += `
                    <h2>Problem Statements</h2>
                    <h3>1. Landslide Prediction and Mitigation</h3>
                    <p>Develop accurate and timely landslide prediction models using machine learning, deep learning, and remote sensing to create interactive maps.</p>

                    <h3>2. Preventing and Mitigating Transportation-Related Emergencies</h3>
                    <p>Design innovative solutions to enhance the safety and resilience of transportation systems, reducing risks and impacts from emergencies such as accidents, natural disasters, and infrastructure failures.</p>

                    <h3>3. Disaster-Resilient Infrastructure</h3>
                    <p>Design adaptive infrastructure systems capable of real-time detection, response, and recovery from disasters, ensuring public safety and minimizing economic losses.</p>

                `;
                break;
            case 'education':
                modalContent.innerHTML += `
                    <h2>Problem Statements</h2>
                    <h3>1. Empower Equal Access to Education</h3>
                    <p>Design a universally accessible digital learning platform for students with disabilities, promoting inclusivity and equal opportunities.</p>

                    <h3>2. Unlock Every Student's Potential</h3>
                    <p>Create solutions for personalized learning experiences, adapting to individual learning styles and abilities.</p>

                    <h3>3. Connect Rural Communities to Quality Education</h3>
                    <p>Develop solutions to bridge education gaps in rural areas, providing equal opportunities for growth and success.</p>
                `;
                break;
            default:
                modalContent.innerHTML += `
                    <h2>${cardTitle.charAt(0).toUpperCase() + cardTitle.slice(1)}</h2>
                    <p>More information about this theme will be available soon.</p>
                `;
        }
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
    
    if (modal && completeList) {
        // Clear existing items
        completeList.innerHTML = '';
        
        // Copy items from the global teamData
        teamData.forEach((item) => {
            const li = document.createElement('li');
            li.innerHTML = `🏆 ${item['TEAM']} - ${item['COLLEGE']}`;
            completeList.appendChild(li);
        });
        
        modal.style.display = 'block';
    }
}

function closeModal() {
    const modal = document.getElementById('listModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function openParticipantsModal() {
    const modal = document.getElementById('participantsModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeParticipantsModal() {
    const modal = document.getElementById('participantsModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Hide all modals initially
    const participantsModal = document.getElementById('participantsModal');
    const popupModal = document.getElementById('popupModal');
    const listModal = document.getElementById('listModal');
    
    if (participantsModal) {
        participantsModal.style.display = 'none';
    }
    if (popupModal) {
        popupModal.style.display = 'none';
    }
    if (listModal) {
        listModal.style.display = 'none';
    }

    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === participantsModal) {
            participantsModal.style.display = 'none';
        }
        if (event.target === listModal) {
            listModal.style.display = 'none';
        }
        if (event.target === popupModal) {
            popupModal.style.display = 'none';
        }
    });

    // Add escape key listener to close modals
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            if (participantsModal) participantsModal.style.display = 'none';
            if (popupModal) popupModal.style.display = 'none';
            if (listModal) listModal.style.display = 'none';
        }
    });
});

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
    const modal = document.getElementById('participantsModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeParticipantsModal() {
    const modal = document.getElementById('participantsModal');
    if (modal) {
        modal.style.display = 'none';
    }
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
