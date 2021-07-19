( function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (var i=0; i<names.length;i++) {

  var ne=names[i];


  var firstLetter =ne.charAt(0);
  firstLetter.toLowerCase();



  
  if (firstLetter=='j') {
     byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}
})();
