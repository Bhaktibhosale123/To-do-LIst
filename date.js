
exports.getDate = function(){
var date = new Date();
var todayDay = date.getDay();
var options = {
  weekday : "long",
  day : "numeric",
  month : "long",
};
return date.toLocaleDateString("en-US", options);
}
