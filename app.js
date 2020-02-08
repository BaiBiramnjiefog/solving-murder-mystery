var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = " knife";
var solved = true;

if (room === "dining room" && suspect === "mr parkes") {
    weapon = "knife";
    solved = true;
} else if (room === "ballroom" && suspect === "Mr. Kalehoff") {
    weapon = "poison";
    solved = "true";

} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
    weapon = "trophy";
    solved = true;

} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
    weapon = "pool stick";
    solved = "true";
}
if (solved) {
    console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}