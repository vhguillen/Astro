function senddata()
{
    alert("Thanks for your Feedback!!!");
    return true;
}

function enlarge(pict)
{
    var largeImage = document.getElementById(pict);

    var large = new Image;
    large.style.display = 'block';
    large.src = largeImage;

    var url = largeImage.getAttribute('src');
    window.open(url, 'Image', 'width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
}