var timeDisplayEl = $("#time-display");

function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);

function colorizer() {
  // var to make for current time.
  var currentHour = moment().hours(); // hour as a Number from 0-23 with moment.js

  // uncomment to test different times of day
  //currentHour = 14;

  // going to loop through the parent container.
  $(".time-block").each(function () {
    var currentRow = $(this)
    // getting ids to get the different time block numbers
    var hourBlock = parseInt(currentRow.data("hour"));
    if (hourBlock < currentHour){ 
     currentRow.addClass("past")
    }else if (hourBlock === currentHour){
     currentRow.addClass("present")
    }else {
     currentRow.addClass("future")
    }
  });
}

// set eventListner on saveBtn to set items on local storage.
$(".saveBtn").click(function(){
  // grab DOM elements for storage.
  var hourSection = $(this).siblings(".hour")
  var textEntry = $(this).siblings(".description")
  // setting the hour as the key and the text as the value.
  localStorage.setItem(hourSection, textEntry)
})

// reshesrch how add and remove a class in jquery
colorizer()