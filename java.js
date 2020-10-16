var imagesource=["https://magazine.medlineplus.gov/images/uploads/main_images/walking-women-seniors.jpg","https://www.healthline.com/hlcmsresource/images/AN_images/AN42-Woman_drinking_water-732X549-Thumbnail.jpg","https://www.essence.com/wp-content/uploads/2020/04/GettyImages-968890566-1920x1080.jpg?width=1920&height=1080","https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&w=1000&q=80"]
var index=0;
setInterval(function(){
if(index===imagesource.length){
  index=0;
}
// document.getElementsByTagName("header")[0].style.backgroundImage="url(imagesource[index])";
document.getElementsByTagName("header")[0].style.backgroundImage="url('"+imagesource[index]+"')";
index++;
},3500);
