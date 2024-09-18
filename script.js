// Script

// function w3_open() {
//     document.getElementById("mySidebar").style.display = "block";
// }

// function w3_close() {
//     document.getElementById("mySidebar").style.display = "none";
// }

function openNav() {
    document.getElementById("sidebar").style.width = "300px";
    document.getElementById("backsidebar").style.display = "block";
    document.getElementById("backsidebar").style.width = "100%";
    document.getElementById("backsidebar").style.height = "100%";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
}
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("backsidebar").style.display = "none";
    document.getElementById("backsidebar").style.width = "0";
    document.getElementById("backsidebar").style.height = "0";
    // document.body.style.backgroundColor = "rgba(0,0,0,0)";
}

// document.getElementById("boxlink").innerHTML = `
document.getElementById("top-container2").innerHTML = `
<div class="sidebar" id="sidebar"></div>
<div class="backsidebar" id="backsidebar" onclick="closeNav()"></div>
<div class="column" style="padding-right:30px;">
    <div class="openbtn" onclick="openNav()"><img src="images/menu-icon.jpg" width="30"></div>
</div>
<div class="column" style="padding-right:20px;">
    <!-- <img src="images/blank-profile.jpg" width="40" style="border-radius:50%; padding-top:2px"> -->
    <img src="images/profile.jpg" style="height:46px; border-radius:50%;">
</div>
<div style="font-size:30px; color:white; padding-top:4px;"><b>MY WEBSITE</b></div>
<div class="clearfix"></div>
`

// document.getElementById("boxlink").innerHTML = `
document.getElementById("sidebar").innerHTML = `
<div class="closebtn" onclick="closeNav()"><img src="images/close-icon.png" width="20"></div>
<span style="font-size:26px;"><b>Main Menu</b></span><br>
<span style="font-size:20px;"><b>Halaman</b></span>
<input type="text" id="mySearch" onkeyup="myFunction()" placeholder="Search..."><br>
<hr style="height:2px; border-width:0; background-color:gray">

<ul class="heading" id="myMenu">
    <li><a href="index.html"><img style="vertical-align:middle;" src="images/home-icon.png" width="20">&emsp;Home</a></li>
    <li><a href="blog.html">Blog</a></li>
    <li><a href="fakta.html">Fakta</a></li>
    <li><a href="profil.html"><img style="vertical-align:middle;" src="images/profile-icon.png" width="20">&emsp;Profil</a></li>
    <li><a href="portofolio.html">Portofolio</a></li>
    <li><a href="hasil-karya.html">Hasil Karya</a></li>
    <li><a href="timeline.html"><img style="vertical-align:middle;" src="images/history-icon.png" width="20">&emsp;Timeline</a></li>
    <li><a href="updates.html"><img style="vertical-align:middle;" src="images/update-icon.png" width="20">&emsp;Updates</a></li>
    <li><a href="projects.html">Projects</a></li>
    <li><a style="color:red">Pertanyaan</a></li>
    <li><a style="color:red">Guide</a></li>
    <li><a style="color:red">Explore</a></li>
</ul>
<a style="font-size:20px; color:red; width:100%; position:absolute; bottom:25px;" onclick="openModal()">About Website</a>
<!-- <button class="heading" id="myBtn" style="font-size:20px; color:red; width:100%; position:absolute; text-align:left; padding-left:20px; bottom:25px;">About Website</button> -->

<!-- The Modal -->
<div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
        <!-- <span class="close">&times;</span> -->
        <div class="closebtn2" onclick="closeModal()"><img src="images/close-icon.png" width="20"></div>
        <span style="font-size:26px;"><b>About Website</b></span><br>
        <p style="padding-left:20px">
            ..........<br>..........<br>..........<br>..........<br>..........<br><br><br>
            Terakhir diupdate: 11 Mei 2024
        </p>
    </div>
</div>
`;
// <span style="font-size:20px; color:gray; position:absolute; bottom:16px">About Website</span>

function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// Get the modal
var modal = document.getElementById("myModal");

// When the user clicks the button, open the modal 
function openModal() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
// When the user clicks anywhere outside of the modal, close it
function closeModal() {
    modal.style.display = "none";
}


// Get the modal image
var modal_image = document.getElementById("myModalImage");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("img01");
var modalImg = document.getElementById("img01m");
var imgdesc = document.getElementById("img01d");
var captionText = document.getElementById("img01c");

function get_image_modal(modal_image, img, modalImg, imgdesc, captionText) {
    img.onclick = function(){
        modal_image.style.display = "block";
        modalImg.src = this.src;
        // captionText.innerHTML = this.alt;
        captionText.innerHTML = imgdesc.innerHTML;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal_image.style.display = "none";
    }
}

get_image_modal(modal_image, img, modalImg, imgdesc, captionText);

var img = document.getElementById("img02");
var modalImg = document.getElementById("img02m");
var imgdesc = document.getElementById("img02d");
var captionText = document.getElementById("img02c");

get_image_modal(modal_image, img, modalImg, imgdesc, captionText);
