window.onload = function() {
    const images = [
        "Images/Robert.jpg",
        "Images/Pumpkin.jpg",
        "Images/Pepper.jpg",
        "Images/Peanut&Katie.jpg",
        "Images/IttyBitty.jpg",
        "Images/FatCat.jpg",
        "Images/Croc.jpg",
        "Images/ButtSauce.jpg",
        "Images/Beaner.jpg"
    ]

    let currentIndex = 0;

    const slideshow = document.getElementById("slideshow");

    function changeImage() {
        currentIndex++;

        if(currentIndex >= images.length) {
            currentIndex = 0;
        }
        slideshow.src = images[currentIndex];

    }

    setInterval(changeImage, 2000);
};
