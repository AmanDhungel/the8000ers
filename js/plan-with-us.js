document.addEventListener('DOMContentLoaded', () => {
    // Initial setup
    setupGroupEventListeners();
});

function setupGroupEventListeners() {
    const groups = [
        { element: '.group-one', handler: group1 },
        { element: '.group-two', handler: group2 },
        { element: '.group-three', handler: group3 },
        { element: '.group-four', handler: group4 },
        { element: '.group-one-1', handler: group5 },
        { element: '.group-two-2', handler: group6 },
        { element: '.group-three-3', handler: group7 },
        { element: '.group-four-4', handler: group8 },
    ];

    groups.forEach(({ element, handler }) => {
        const groupElement = document.querySelector(element);
        if (groupElement) {
            groupElement.addEventListener('click', () => {
                console.log(`Clicked: ${element}`);
                handler();
                setupCalendarHandlers();
                
                // Reset all lines to black
                const lines = document.querySelectorAll('.line-one hr, .line-1 hr, .line-2 hr, .line-3 hr, .line-4 hr, .line-5 hr, .line hr');
                lines.forEach(line => line.style.color = 'black');
                
                // Mapping for specific elements to orange
                const lineMapping = {
                    '.group-two': ['.line-one hr'],
                    '.group-three': ['.line-one hr', '.line-1 hr'],
                    '.group-four': ['.line-one hr', '.line-1 hr', '.line-2 hr'],
                    '.group-one-1': ['.line-one hr', '.line-1 hr', '.line-2 hr', '.line-3 hr'],
                    '.group-two-2': ['.line-one hr', '.line-1 hr', '.line-2 hr', '.line-3 hr', '.line-4 hr'],
                    '.group-three-3': ['.line-one hr', '.line-1 hr', '.line-2 hr', '.line-3 hr', '.line-4 hr', '.line-5 hr'],
                    '.group-four-4': ['.line-one hr', '.line-1 hr', '.line-2 hr', '.line-3 hr', '.line-4 hr', '.line-5 hr', '.line hr']
                };
    
                if (lineMapping[element]) {
                    lineMapping[element].forEach(selector => {
                        const lineElement = document.querySelector(selector);
                        if (lineElement) {
                            lineElement.style.color = 'orange';
                        } else {
                            console.error(`Selector not found: ${selector}`);
                        }
                    });
                } else {
                    console.error('No mapping found for element:', element);
                }
            });
        } else {
            console.error('Element not found:', element);
        }
    });

    // Initial setup
    console.log('Initial setup');
    group2();
    group3();
    group4();
    group5();
    group6();
    group7();
    group8();
    group1();
}

function setupCalendarHandlers() {
    const dateRangeInput = document.getElementById('date-range');
    const monthYearDisplay = document.getElementById('month-year');
    const daysContainer = document.getElementById('days');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    const endDateRangeInput = document.getElementById('end-date-range');
    const endMonthYearDisplay = document.getElementById('end-month-year');
    const endDaysContainer = document.getElementById('end-days');
    const endPrevButton = document.getElementById('end-prev');
    const endNextButton = document.getElementById('end-next');

    let currentDate = new Date();
    let endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 1); // Start with the next month for end date

    function renderCalendar(date, monthYearDisplay, daysContainer) {
        const month = date.getMonth();
        const year = date.getFullYear();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        monthYearDisplay.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;
        daysContainer.innerHTML = '';

        for (let i = 0; i < firstDay; i++) {
            daysContainer.innerHTML += `<div></div>`;
        }

        for (let i = 1; i <= daysInMonth; i++) {
            daysContainer.innerHTML += `<div>${i}</div>`;
        }
    }

    prevButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate, monthYearDisplay, daysContainer);
    });

    nextButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate, monthYearDisplay, daysContainer);
    });

    endPrevButton.addEventListener('click', () => {
        endDate.setMonth(endDate.getMonth() - 1);
        renderCalendar(endDate, endMonthYearDisplay, endDaysContainer);
    });

    endNextButton.addEventListener('click', () => {
        endDate.setMonth(endDate.getMonth() + 1);
        renderCalendar(endDate, endMonthYearDisplay, endDaysContainer);
    });

    renderCalendar(currentDate, monthYearDisplay, daysContainer);
    renderCalendar(endDate, endMonthYearDisplay, endDaysContainer);

    daysContainer.addEventListener('click', (event) => {
        if (event.target.textContent !== '') {
            const day = event.target.textContent;
            const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            dateRangeInput.value = selectedDate.toISOString().split('T')[0];
            document.querySelectorAll('.days div').forEach(day => day.classList.remove('selected'));
            event.target.classList.add('selected');
        }
    });

    endDaysContainer.addEventListener('click', (event) => {
        if (event.target.textContent !== '') {
            const day = event.target.textContent;
            const selectedDate = new Date(endDate.getFullYear(), endDate.getMonth(), day);
            endDateRangeInput.value = selectedDate.toISOString().split('T')[0];
            document.querySelectorAll('.end-days div').forEach(day => day.classList.remove('selected'));
            event.target.classList.add('selected');
        }
    });
}



function group1(){
    const dynamicContainer = document.querySelector('.dynamic-container');
    dynamicContainer.innerHTML = `
        <div class="rectangle">
            <div class="flex-row">
                <span class="travel-question">How do you want to travel?</span>
                <div style="cursor: pointer;" class="arrow-right-alt" onclick="group2();setupCalendarHandlers();"><i class="fa fa-arrow-right" style="font-size: 30px; margin-top: 10px; color: orange;"></i></div>
            </div>
            <div class="frame">
                <div class="frame-1">
                    <div class="group-2">
                        <div class="rectangle-3"></div>
                        <div class="person"></div>
                        <div class="line"><hr></div>
                        <span class="solo">Solo</span>
                    </div>
                    <div class="group-4">
                        <div class="rectangle-5"></div>
                        <div class="rectangle-6"></div>
                        <div class="groups"></div>
                        <div class="line-7"><hr></div>
                        <span class="group-8">Group</span>
                    </div>
                    <div class="group-9">
                        <button class="rectangle-a"></button>
                        <div class="psychology-alt"></div>
                        <div class="line-b"><hr></div>
                        <span class="not-sure">Not Sure</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function group2(){
    const dynamicContainer = document.querySelector('.dynamic-container');
    dynamicContainer.innerHTML = `
        <div class="header">
            <div class="arrow-right-alt" onclick="group1();" style="cursor: pointer;"><i class="fa fa-arrow-left" style="font-size: 30px; margin-top: 10px; color: orange;"></i></div>
            <div class="arrow-right-alt-1" onclick="group3()" style="cursor: pointer;"><i class="fa fa-arrow-right" style="font-size: 30px; margin-top: 10px; color: orange;"></i></div>
            <span class="select-your-travel">Select Your Travel Dates</span>
        </div>
        <div class="travelDates-imgs">
            <div class="frame-1">
                <div class="group">
                    <div class="rectangle"></div>
                    <div class="calendar-clock"></div>
                    <div class="line"></div>
                    <span class="exact-date">Exact Date</span>
                </div>
                <div class="group-2">
                    <div class="rectangle-3"></div>
                    <div class="rectangle-4"></div>
                    <div class="calendar-month"></div>
                    <div class="line-5"></div>
                    <span class="flexible-date-range">Flexible Date Range</span>
                </div>
                <div class="group-6">
                    <div class="rectangle-7"></div>
                    <div class="event-repeat"></div>
                    <div class="line-8"></div>
                    <span class="decide-later">Decide Later</span>
                </div>
            </div>
        </div>
        <div class="calenders">
            <div class="calender-body">
                <div class="calendar-container">
                    <input type="text" id="date-range" placeholder="Select date range">
                    <div class="calendar">
                        <div class="header">
                            <button id="prev">&lt;</button>
                            <div id="month-year"></div>
                            <button id="next">&gt;</button>
                        </div>
                        <div class="body">
                            <div class="weekdays">
                                <div>Su</div>
                                <div>Mo</div>
                                <div>Tu</div>
                                <div>We</div>
                                <div>Th</div>
                                <div>Fr</div>
                                <div>Sa</div>
                            </div>
                            <div class="days" id="days">
                                <!-- Days will be generated here by JavaScript -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="calender-body">
                <div class="calendar-container">
                    <input type="text" id="end-date-range" placeholder="Select date range">
                    <div class="calendar">
                        <div class="end-header">
                            <button id="end-prev">&lt;</button>
                            <div id="end-month-year"></div>
                            <button id="end-next">&gt;</button>
                        </div>
                        <div class="body">
                            <div class="weekdays">
                                <div>Su</div>
                                <div>Mo</div>
                                <div>Tu</div>
                                <div>We</div>
                                <div>Th</div>
                                <div>Fr</div>
                                <div>Sa</div>
                            </div>
                            <div class="end-days" id="end-days">
                                <!-- Days will be generated here by JavaScript -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}


function group3(){
  let dynamicContainer = document.querySelector('.dynamic-container');
  let img = './asset/item-details/country-nepal.png';
  dynamicContainer.innerHTML = `
  <div class="header">
  <div class="arrow-right-alt"  onclick="group2();setupCalendarHandlers();" style="cursor: pointer;"><i class="fa fa-arrow-left" style="font-size: 30px; margin-top: 10px; color: orange;"></i></div>
  <div class="arrow-right-alt-1"  onclick="group4()" style="cursor: pointer;"><i class="fa fa-arrow-right" style="font-size: 30px; margin-top: 10px; color: orange;"></i></div>
  <span class="select-your-travel">Choose Your Destination</span>
</div>
  <div class="country-container">
  <div class="rectangle-nepal">
    <div class="px-flag"></div>
    <div class="line"></div>
    <button class="nepal">Nepal</button>
  </div>
  <div class="rectangle-1">
    <div class="rectangle-2"><div class="px-flag-of-india"></div></div>
    <div class="line-3"></div>
    <span class="india">India</span>
  </div>
  <div class="rectangle-4">
    <div class="line-5"></div>
    <span class="span-pakistan">Pakistan</span>
    <div class="rectangle-6"></div>
    <div class="px-flag-of-pakistan"></div>
  </div>
  <div class="rectangle-7">
    <div class="flag-of-china"></div>
    <div class="line-8"></div>
    <span class="china">China</span>
  </div>
</div>
<img src=${img} style="position: relative; left: 20%;" alt="">`
}

function group4() {
    let dynamicContainer = document.querySelector('.dynamic-container');
    dynamicContainer.innerHTML = `
        <div class="header">
            <div class="arrow-right-alt"  onclick="group3()" style="cursor: pointer;"><i class="fa fa-arrow-left" style="font-size: 30px; margin-top: 10px; color: orange;"></i></div>
            <div class="arrow-right-alt-1"  onclick="group5()" style="cursor: pointer;"><i class="fa fa-arrow-right" style="font-size: 30px; margin-top: 10px; color: orange;"></i></div>
            <span class="select-your-travel">Choose Your Packages</span>
        </div>
        <div class="difficulty-container">
            <div class="rectangle-nepal" onclick="group4trekking()">
                <div class="line"><hr></div>
                <div class="px-flag"></div>
                <button class="nepal">Trekking</button>
            </div>
            <div class="rectangle-1">
                <div class="rectangle-2"><div class="px-flag-of-india"></div></div>
                <div class="line-3"><hr></div>
                <span class="india">Expidition</span>
            </div>
            <div class="rectangle-4">
                <div class="line-5"><hr></div>
                <span class="span-pakistan">Sighteeing</span>
                <div class="rectangle-6"></div>
                <div class="px-flag-of-pakistan"></div>
            </div>
            <div class="rectangle-7">
                <div class="flag-of-china"></div>
                <div class="line-8"><hr></div>
                <span class="china">others</span>
            </div>
        </div>
        <div class="dynamic-difficulty">
        <div class="difficulty-choice">
            <div><img src="./asset/item-details/Group 143726230.png" alt="">
            <button>Beginner</button>
            </div>
            <div><img src="./asset/item-details/Group 143726231.png" alt="">
            <button>Intermediate</button>
            </div>
            <div><img src="./asset/item-details/Group 143726232.png" alt="">
            <button>Advanced</button>
            </div>
        </div>
        </div>
    `;


    function group4trekking() {
        let dynamicdifficulty = document.querySelector('.dynamic-difficulty');
            dynamicdifficulty.innerHTML = `
            <div class="difficulty-choice">
            <div><img src="./asset/item-details/Group 143726230.png" alt="">
            <button>Beginner</button>
            </div>
            <div><img src="./asset/item-details/Group 143726231.png" alt="">
            <button>Intermediate</button>
            </div>
            <div><img src="./asset/item-details/Group 143726232.png" alt="">
            <button>Advanced</button>
            </div>
        </div>`;
        }
group4expidition();
group4trekking();


    function group4expidition() {
        let dynamicdifficulty = document.querySelector('.dynamic-difficulty');
            dynamicdifficulty.innerHTML = `
                <div class="difficulty-expedition">
                    <h1>Expedition</h1>
                    <hr>
                    <div>
                        <img src="./asset/item-details/difficulty-expedition.png" alt="">
                        <ul>
                            <li style="font-weight: 800;">Mt. Everest Expedition (South)</li>
                            <li><i class="fa-solid fa-snowflake"></i>Winter (October -December)</li>
                            <li><i class="fa-solid fa-clock"></i><strong>Duration:</strong>55 days</li>
                            <li><i class="fa-solid fa-arrow-up" style="text-decoration: underline; text-underline-offset: 3px;"></i><strong>Grade:</strong>Challenging</li>
                            <li><i class="fa-solid fa-mountain-sun"></i><strong>Max Altitude:</strong>8,586m/28,169ft</li>
                        </ul>
                        <hr>
                        <button>Select</button>
                    </div>
                    <hr>
                    <div>
                        <img src="./asset/item-details/difficulty-expedition.png" alt="">
                        <ul>
                            <li style="font-weight: 800;">Mt. Everest Expedition (South)</li>
                            <li><i class="fa-solid fa-snowflake"></i>Winter (October -December)</li>
                            <li><i class="fa-solid fa-clock"></i><strong>Duration:</strong>55 days</li>
                            <li><i class="fa-solid fa-arrow-up" style="text-decoration: underline; text-underline-offset: 3px;"></i><strong>Grade:</strong>Challenging</li>
                            <li><i class="fa-solid fa-mountain-sun"></i><strong>Max Altitude:</strong>8,586m/28,169ft</li>
                        </ul>
                        <hr>
                        <button>Select</button>
                    </div>
                </div>`;
        }

    // Add event listener after content is added to the DOM
    const rectangletrekking = document.querySelector('.rectangle-nepal');
    const rectangle1 = document.querySelector('.rectangle-1');
    rectangle1.addEventListener('click', () => {
        group4expidition();
    });

    rectangletrekking.addEventListener('click', ()=> {
        group4trekking();
    })
}

function group5() {
    let dynamicContainer = document.querySelector('.dynamic-container');
    dynamicContainer.innerHTML = `
    <div class="header">
        <div class="arrow-right-alt"  onclick="group4()" style="cursor: pointer;"><i class="fa fa-arrow-left" style="font-size: 30px; margin-top: 10px; color: orange;"></i></div>
        <div class="arrow-right-alt-1"  onclick="group6()" style="cursor: pointer;"><i class="fa fa-arrow-right" style="font-size: 30px; margin-top: 10px; color: orange;"></i></div>
        <span class="select-your-travel">Accommodation Preferences</span>
    </div>
    <div class='accomodation'>
        <div class="difficulty-container">
            <div class="rectangle-nepal">
                <div class="line"><hr></div>
                <div class="px-flag"></div>
                <button class="nepal">Basic</button>
            </div>
            <div class="rectangle-1">
                <div class="rectangle-2"><div class="px-flag-of-india"></div></div>
                <div class="line-3"><hr></div>
                <span class="india">Luxury</span>
            </div>
            <div class="rectangle-4">
                <div class="line-5"><hr></div>
                <span class="span-pakistan">Camping</span>
                <div class="rectangle-6"></div>
                <div class="px-flag-of-pakistan"></div>
            </div>
            <div class="rectangle-7">
                <div class="flag-of-china"></div>
                <div class="line-8"><hr></div>
                <span class="china">Self-Book</span>
            </div>
        </div>
        </div>
        
    `;
}

function group6() {
    let dynamicContainer = document.querySelector('.dynamic-container');
    dynamicContainer.innerHTML = `
    <div class="header">
        <div class="arrow-right-alt"  onclick="group5()" style="cursor: pointer;"><i class="fa fa-arrow-left" style="font-size: 30px; margin-top: 10px; color: orange;"></i></div>
        <div class="arrow-right-alt-1"  onclick="group7()" style="cursor: pointer;"><i class="fa fa-arrow-right" style="font-size: 30px; margin-top: 10px; color: orange;"></i></div>
        <span class="select-your-travel">Budget</span>
    </div>
    <div class='budget'>
        <div class="difficulty-container">
            <div class="rectangle-1" style="margin-left: 80px">
                <div class="rectangle-2"><div class="px-flag-of-india"></div></div>
                <div class="line-3"><hr></div>
                <span class="india">Luxury</span>
            </div>
            <div class="rectangle-4">
                <div class="line-5"><hr></div>
                <span class="span-pakistan">Camping</span>
                <div class="rectangle-6"></div>
                <div class="px-flag-of-pakistan"></div>
            </div>
            <div class="rectangle-7">
                <div class="flag-of-china"></div>
                <div class="line-8"><hr></div>
                <span class="china">Self-Book</span>
            </div>
        </div>
        </div> 
        <div class="budget-container">
        <div class="sub-container">
          <div class="content-container"><div class="progress-container">
            <div class="progress-bar" id="progressBar"></div>
            <div class="progress-circle start"></div>
            <div class="progress-circle end"></div>
        </div></div>
          <div class="wrapper-container">
            <div class="person-container">
              <span class="dollar-1000">$1000</span
              ><span class="person1">/person</span>
            </div>
            <div class="div-person">
              <span class="dollar-150000">$150000</span
              ><span class="person-1">/person</span>
            </div>
          </div>
        </div>
        <div class="divider"></progress></div>
        <button class="container">
          <div class="button"><span class="plan-trip">Plan trip</span></div>
        </button>
      </div>
    `;
}


function group7() {
    let dynamicContainer = document.querySelector('.dynamic-container');
    dynamicContainer.innerHTML = `
    <div class="header">
        <div class="arrow-right-alt"  onclick="group6()" style="cursor: pointer;"><i class="fa fa-arrow-left" style="font-size: 30px; margin-top: 10px; color: orange;"></i></div>
        <div class="arrow-right-alt-1"  onclick="group8()" style="cursor: pointer;"><i class="fa fa-arrow-right" style="font-size: 30px; margin-top: 10px; color: orange;"></i></div>
        <span class="select-your-travel">Accommodation Preferences</span>
    </div>
    <div class='experience'>
        <div class="difficulty-container">
            <div class="rectangle-nepal">
                <div class="line"><hr></div>
                <div class="px-flag"></div>
                <button class="nepal">Basic</button>
            </div>
            <div class="rectangle-1">
                <div class="rectangle-2"><div class="px-flag-of-india"></div></div>
                <div class="line-3"><hr></div>
                <span class="india">Luxury</span>
            </div>
            <div class="rectangle-4">
                <div class="line-5"><hr></div>
                <span class="span-pakistan">Camping</span>
                <div class="rectangle-6"></div>
                <div class="px-flag-of-pakistan"></div>
            </div>
            <div class="rectangle-7">
                <div class="flag-of-china"></div>
                <div class="line-8"><hr></div>
                <span class="china">Self-Book</span>
            </div>
        </div>
        </div>
        
    `;
}



function group8() {
    let dynamicContainer = document.querySelector('.dynamic-container');
    dynamicContainer.innerHTML = `
    <div class="header">
        <div class="arrow-right-alt"  onclick="group7()" style="cursor: pointer;"><i class="fa fa-arrow-left" style="font-size: 30px; margin-top: 10px; color: orange;"></i></div>
        <span class="select-your-travel">Accommodation Preferences</span>
    </div>   

    <div class='review'>
    <div class='review-img-text'>
        <div class="review-container">
            <div class="rectangle-nepal">
                <div class="line"><hr></div>
                <div class="px-flag"></div>
                <button class="nepal">Basic</button>
            </div>
            <div class="rectangle-1">
                <div class="rectangle-2"><div class="px-flag-of-india"></div></div>
                <div class="line-3"><hr></div>
                <span class="india">Luxury</span>
            </div>
            <div class="rectangle-4">
                <div class="line-5"><hr></div>
                <span class="span-pakistan">Camping</span>
                <div class="rectangle-6"></div>
                <div class="px-flag-of-pakistan"></div>
            </div>
        </div>
        <div class=' review-text'>
        <ul>
        <li>Travel Mode <span>Solo</span></li>
        <li>Departure: <span>15 May 2024 -30 May 2024</span></li>
        <li>Destination: <span>Nepal</span></li>
        <li>Package <span>Expedition: Mt. Everest</span></li>
      </ul>
      <ul>
        <li>Budget <span>No more than $40,000</span></li>
        <li>Custom Preference: <span>Nature Sightseeing</span></li>
        <li> Accommodation<span>Tent</span></li>
        <li> Address<span>Kapan, Budhanilkantha</span></li>
        <li> Message<span>Abc</span></li>
        <li>  <Button>Check & Confirm</Button></li>
      </ul>

      </div>
      </div>
        </div>
    `;
}