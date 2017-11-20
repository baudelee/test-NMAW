process.on('message', function(message, parent){
  var meal = {};
  switch(message.cmd){
    case 'makeBreakfast':
      meal = ["ham","eggs","toast"];
      break;
    case 'makeLunch':
      meal = ["burger", "fries", "shake"];
      break;
    case 'makeDinner':
      meal = ["soup", "salad","steak"];
      break;
    case 'Test':
      meal = ['Test'];
      break;
  }
  process.send(meal);
})
