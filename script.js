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
document.getElementById("sidebar").innerHTML = `
<style>
/* The Modal (background) */
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.3); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
    background-color: #fefefe;
    border-radius: 10px;
    margin: auto;
    padding-top: 15px;
    border: 1px solid #888;
    width: 80%;
}

/* The Close Button */
.close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover, .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

.closebtn2 {
    background-color: #d0d0d0;
    border-radius: 6px;
    cursor: pointer;
    float: right;
    margin-right: 15px;
    font-size: 0px;
    transition: 0.3s;
}
.closebtn2 img {
    padding: 8px;
}
</style>

<div class="closebtn" onclick="closeNav()"><img src="images/close-icon.png" width="20"></div>
<span style="font-size:26px;"><b>Main Menu</b></span><br>
<span style="font-size:20px;"><b>Halaman</b></span>
<input type="text" id="mySearch" onkeyup="myFunction()" placeholder="Search..."><br>
<hr style="height:2px; border-width:0; background-color:gray">

<ul class="heading" id="myMenu">
    <li><a href="index.html">Home</a></li>
    <li><a href="blog.html">Blog</a></li>
    <li><a href="fakta.html">Fakta</a></li>
    <li><a href="profil.html">Profil</a></li>
    <li><a href="portofolio.html">Portofolio</a></li>
    <li><a href="hasil-karya.html">Hasil Karya</a></li>
    <li><a href="timeline.html">Timeline</a></li>
    <li><a href="updates.html">Updates</a></li>
    <li><a href="projects.html">Projects</a></li>
    <li><a style="color:red">Pertanyaan</a></li>
    <li><a style="color:red">Guide</a></li>
    <li><a style="color:red">Explore</a></li>
</ul>
<!-- <a style="font-size:20px; color:red; width:100%; position:absolute; bottom:25px;">About Website</a> -->
<button class="heading" id="myBtn" style="font-size:20px; color:red; width:100%; position:absolute; text-align:left; padding-left:20px; bottom:25px;">About Website</button>

<!-- The Modal -->
<div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
        <!-- <span class="close">&times;</span> -->
        <div class="closebtn2" onclick="closeModal()"><img src="images/close-icon.png" width="20"></div>
        <span style="font-size:26px;"><b>About Website</b></span><br>
        <p style="padding-left:20px">
            ..........<br>..........<br>..........<br>..........<br>..........<br><br><br>
            Terakhir diupdate: 8 Mei 2024
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

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

function closeModal() {
    modal.style.display = "none";
}
