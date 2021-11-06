var image = ["https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSrCpHmX32-662MjTk-0xiqIMJwftWoNSATOc5skgesF5dJJsik","https://img.favpng.com/4/24/8/clip-art-mother-openclipart-illustration-image-png-favpng-iaCpPK5ewsh00VYqUkfRFfaif.jpg","https://i.pinimg.com/originals/6d/41/6f/6d416f0239f360a9136f81d11c8ecc5b.jpg","https://image.shutterstock.com/image-vector/cute-kid-teen-boy-show-260nw-1509139481.jpg"];
var name = ["Family book","Mother","Father","Jash",];
var i = 0;
function update(){
    i++
    var number_of_family_member=3;
    if( i>number_of_family_member){

        i=0;
    }
    var updatedimage = image[i];
    var updatedname = name[i];
    document.getElementById("nameh4").innerHTML=updatedname;
    document.getElementById("imgimg").src=updatedimage;
}


