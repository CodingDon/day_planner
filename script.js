var timeDisplayEl = $('#time-display');





function displayTime() {
 var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
 timeDisplayEl.text(rightNow);}

setInterval(displayTime, 1000);

function colorizer() {
// var to make for current time.
var currentTime = moment().hours(); // hour as a Number from 0-23 with moment.js


// going to loop through the parent container.
$(".time-block").each( function() {
// getting ids to get the different time block numbers
var hourBlock = parseInt(
 $(this).attr("id").split("-")[1]
)
}) 
}
// reshesrch how add and remove a class in jquery  