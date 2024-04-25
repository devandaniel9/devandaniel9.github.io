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
<a style="font-size:20px; color:red; width:100%; position:absolute; bottom:25px;">About Website</a>
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
