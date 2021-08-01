
module.exports.getdate =getdate;

function getdate() {
var today = new Date() ;

var option = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
};
  var newday =today.toLocaleDateString("en",option);
  return newday;    
}


module.exports.getday =getday;
function getday() {
var today = new Date();

var option = {
    weekday: 'long'

};
  var day =today.toLocaleDateString("en",option);
  return day;    
}









