var images=["R.png","fabricio.jpg","Mauricio.jpg","LUCIANE.jpg"];

var names = ["Álbum de Família","tio Fafa ou Fabricio","tio Mauricio com a biza","Luciane mamãe"];

var i = 0;
function show()
{
i++;
var numbersOfFamilyMemberInArray = 3;
if(i > numbersOfFamilyMemberInArray )
{
    i = 0;
}
var updatedImage = images[i];
var updatedName = names[i];
document.getElementById("img").src = updatedImage;
document.getElementById("NomeFamilia").innerHTML = updatedName;
}