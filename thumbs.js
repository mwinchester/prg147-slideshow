/**
 * Created by meriw on 9/21/2016.
 */

var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};
var i = 0; //for loop counter
var centerThumb = 0;
var leftThumb = 4;
var rightThumb = 1;
var image = new Image(); // creates an image object
var image2 = new Image(); // large images


// declaring arrays
var images = ["thumbs/thumb1.png", "thumbs/thumb2.png", "thumbs/thumb3.png", "thumbs/thumb4.png", "thumbs/thumb5.png"];
var largeImages = ["images/image1.png", "images/image2.png", "images/image3.png", "images/image4.png", "images/image5.png"];
var title = ["title 1", "title 2", "title 3", "title 4", "title 5"];
var descripton = ["longer description 1", "longer description 2", "longer description 3", "longer description 4", "longer description 5"];


var count = images.length; // will change if we add more items to the image array

// preloading the images for the slide show
function preload() {
    "use strict";
    for (i = 0; i < count; i++) {
        image.src = images[i];
        image2.src = largeImages[i];
        images.push(image);
        largeImages.push(image2);
    }
}



//moving through the thumbnails
function changeThumb() {
    "use strict";
    centerThumb++;
    if (centerThumb === count) {
        centerThumb = 0;
    }
    $("center").src = images[centerThumb];

    leftThumb++;
    if (leftThumb === count) {
        leftThumb = 0;
    }
    $("left").src = images[leftThumb];


    rightThumb++;
    if (rightThumb === count) {
        rightThumb = 0;
    }
    $("right").src = images[rightThumb];
}

function leftButton() {
    "use strict";
    $("large").src = largeImages[leftThumb];
    $("title").innerHTML = title[leftThumb];
    $("detail").innerHTML = descripton[leftThumb];
}

function rightButton() {
    "use strict";
    $("large").src = largeImages[rightThumb];
    $("title").innerHTML = title[rightThumb];
    $("detail").innerHTML = descripton[rightThumb];
}

function centerButton() {
    "use strict";
    $("large").src = largeImages[centerThumb];
    $("title").innerHTML = title[centerThumb];
    $("detail").innerHTML = descripton[centerThumb];
}



function onload() {
    "use strict";
    preload();
}
