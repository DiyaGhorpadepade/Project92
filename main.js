var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL('3050806f7fb6df4a38d235dc30391f96.jpg', function(Img) {
    block_image_object = Img   
    block_image_object.scaleToWidth(700);
    block_image_object.scaleToHeight(510);
    block_image_object.set({
    top:0;
    left:0
    });   
    canvas.add(block_image_object)
    });

}

function playSound(){
    x.play();
}
