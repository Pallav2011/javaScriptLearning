var checkVoteEligiblity = function (age) {
  if (typeof age == "number") {
    if (age <= 0 || age > 120) {
      console.log(`Age is ${age}, invalid data`);
    } else {
      if (age >= 18 && age <= 120) {
        console.log(`Age is ${age}, he is eligible for vote`);
      } else {
        console.log(`Age is ${age}, he is not eligible for vote`);
      }
    }
  } else {
    console.log(`Enter the number, given value is invalid becouse type is not matched`);
  }
};

checkVoteEligiblity(45);
checkVoteEligiblity(17);
checkVoteEligiblity(8);
checkVoteEligiblity(20);
checkVoteEligiblity(-10);
checkVoteEligiblity(200);
checkVoteEligiblity(0);
checkVoteEligiblity("20");
