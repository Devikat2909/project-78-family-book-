var images = [
  "https://abhyuday-tripathi.github.io/The-Family-Book/poster.jpg",
  "https://abhyuday-tripathi.github.io/The-Family-Book/sister.PNG", 
  "https://i.postimg.cc/wjMnFtMX/father.jpg" , 
  "https://i.postimg.cc/5ymDKL83/bro.jpg", 
  "https://i.postimg.cc/JnL6wtrd/sister.jpg", 
  "https://i.postimg.cc/bw5W5zSK/mother.jpg"
];

var names = [
 "Family Book",
 "Devika",
 "Nikhil",
 "lakshmi",
 "Sree",
 "Louie"
];
var i = 0;
function update()
{
i++;
var numbers_of_family_member_in_array = 5
if(i > numbers_of_family_member_in_array )
{
i = 0;
}
var updatedImage = images[i];
var updatedName  = names[i];
document.getElementById("family_member_image").src = updatedImage;
document.getElementById("family_member_name").innerHTML = updatedName;
}

