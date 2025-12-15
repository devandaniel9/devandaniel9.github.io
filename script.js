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

// theme_check = false;

function apply_theme(theme_check) {
    if (theme_check) {
		document.documentElement.style.setProperty('--darkmode', 1);
		document.getElementById("theme").src = "images/light-mode.png";
		document.getElementById("theme").title = "Ubah ke Tema Terang";
    } else {
        document.documentElement.style.setProperty('--darkmode', 0);
		document.getElementById("theme").src = "images/dark-mode.png";
		document.getElementById("theme").title = "Ubah ke Tema Gelap";
    }
	localStorage.setItem("theme_check", theme_check);
}

function change_theme(theme_check) {
    if (theme_check) theme_check = false;
	else theme_check = true;
	console.log(theme_check);
	apply_theme(theme_check);
	return theme_check;
}

// document.getElementById("boxlink").innerHTML = `
document.getElementById("top-container2").innerHTML = `
<div class="sidebar" id="sidebar"></div>
<div class="backsidebar" id="backsidebar" onclick="closeNav()"></div>
<div class="column" style="padding-right:10px;">
    <div class="openbtn" onclick="openNav()"><img src="images/menu-icon.jpg" title="Menu" style="filter:invert(0%)" width="30"></div>
</div>
<!-- <div class="column" style="padding-right:30px;"> -->
<div class="column" style="padding-right:20px;">
    <div class="openbtn" onclick="theme_check=change_theme(theme_check)"><img id="theme" src="images/dark-mode.png" title="Ubah ke Tema Gelap" style="filter:invert(100%)" width="30" height="30"></div>
</div>
<div class="column" style="padding-right:20px;">
    <!-- <img src="images/blank-profile.jpg" width="40" style="border-radius:50%; padding-top:2px"> -->
    <img src="images/profile.jpg" style="height:46px; border-radius:50%;">
</div>
<div class="column" style="padding-right:20px;">
    <div class="heading-top" style="font-size:30px; color:white; padding-top:4px;"><b>MY WEBSITE</b></div>
</div>
<div class="clearfix"></div>
`

theme_check = localStorage.getItem("theme_check");
if (theme_check == null) theme_check = false;
console.log(theme_check);
apply_theme(theme_check);

/*
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

<li><a style="color:red">Pertanyaan</a></li>
<li><a style="color:red">Guide</a></li>
<li><a style="color:red">Explore</a></li>
*/

// document.getElementById("boxlink").innerHTML = `
// <a style="font-size:20px; color:red; width:100%; position:absolute; bottom:25px;" onclick="openModal()">About Website</a>
// <span style="font-size:26px;">
document.getElementById("sidebar").innerHTML = `
<div class="closebtn" title="Close" onclick="closeNav()"><img class="imginvert" src="images/close-icon.png" width="20"></div>
<span class="sidespan" style="font-size:26px;"><b>Main Menu</b></span><br>
<span class="sidespan" style="font-size:20px;"><b>Halaman</b></span>
<input type="text" id="mySearch" onkeyup="myFunction()" placeholder="Search..."><br>
<hr style="height:2px; border-width:0; background-color:gray">

<ul class="heading" id="myMenu">
    <li><a href="index.html"><img class="imginvert" style="vertical-align:middle;" src="images/home-icon.png" width="25">&emsp;Home</a></li>
    <li><a href="blog.html"><img class="imginvert" style="vertical-align:middle;" src="images/blog-icon.png" width="25">&emsp;Blog</a></li>
    <li><a href="profil.html"><img class="imginvert" style="vertical-align:middle;" src="images/profile-icon.png" width="25">&emsp;Profil</a></li>
    <li><a href="hasil-karya.html"><img class="imginvert" style="vertical-align:middle;" src="images/Achievement-icon-vector-02.svg" width="25">&emsp;Hasil Karya</a></li>
    <li><a href="timeline.html"><img class="imginvert" style="vertical-align:middle;" src="images/history-icon.png" width="25">&emsp;Timeline</a></li>
    <li><a href="updates.html"><img class="imginvert" style="vertical-align:middle;" src="images/update-icon.png" width="25">&emsp;Updates</a></li>
    <li><a href="projects.html"><img style="vertical-align:middle;" src="images/project-icon.png" width="25">&emsp;Projects</a></li>
	<li><a href="help.html"><img class="imginvert" style="vertical-align:middle;" src="images/help-icon.png" width="25">&emsp;Help</a></li>
</ul>
<a style="font-size:20px; width:100%; position:absolute; bottom:25px;" onclick="openModal()"><img class="imginvert" style="vertical-align:middle;" src="images/info-icon.png" width="25">&emsp;About Website</a>
<!-- <button class="heading" id="myBtn" style="font-size:20px; color:red; width:100%; position:absolute; text-align:left; padding-left:20px; bottom:25px;">About Website</button> -->

<!-- The Modal -->
<div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
        <!-- <span class="close">&times;</span> -->
        <div class="closebtn2" onclick="closeModal()"><img class="imginvert" src="images/close-icon.png" width="20"></div>
        <span class="sidespan" style="font-size:30px;"><img class="imginvert" style="vertical-align:middle;" src="images/info-icon.png" width="30">&emsp;<b>About Website</b></span>
        <p style="padding-left:20px">
            <!-- ..........<br>..........<br>..........<br>..........<br>..........<br><br><br> -->
			Inilah Website Devan<br>
			Dibuat dari Github<br>
			Website ini pertama kali dibuat tahun 2023
			<br><br>
			Sekian dari saya, terimakasih yang sudah menggunakan website ini.
			<br><br>
			<span id="version-sidebar"></span>
			<br><br>
			Copyright © 2025 by Devan
            <!-- Terakhir diupdate: 11 Mei 2024 -->
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
    // modal.style.display = "block";
	try {
        document.getElementById("version-sidebar").innerHTML = document.getElementById("version").innerHTML;
    } catch(err) {
		document.getElementById("version-sidebar").innerHTML = '';
	}
	modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
// When the user clicks anywhere outside of the modal, close it
function closeModal() {
    modal.style.display = "none";
}

function get_image_modal(modal_image, img, modalImg, imgdesc, captionText) {
    img.onclick = function(){
        modal_image.style.display = "block";
        modalImg.src = this.src;
        // captionText.innerHTML = this.alt;
        captionText.innerHTML = imgdesc.innerHTML;
    }

    // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];
	var span = document.getElementById("close01").innerHTML;

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal_image.style.display = "none";
    }
}

// Get the modal image
var modal_image_content = document.getElementById("myModalImage");
var modal_image = document.getElementById("imgmodal");
var modal_image_desc = document.getElementById("imgdesc");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("img01");
// console.log(img);
// var modalImg = document.getElementById("img01m");
// console.log(modalImg);
// var imgdesc = document.getElementById("img01d").innerHTML;
// console.log(imgdesc);
// var captionText = document.getElementById("img01c").innerHTML;
// console.log(captionText);

// get_image_modal(modal_image, img, modalImg, imgdesc, captionText);

// var modal_image = document.getElementById("myModalImage2");
// var img = document.getElementById("img02");
// var modalImg = document.getElementById("img02m");
// var imgdesc = document.getElementById("img02d");
// var captionText = document.getElementById("img02c");

// get_image_modal(modal_image, img, modalImg, imgdesc, captionText);

// modal_image.style.display = "block";

digit = 3;

function addzero(n) {
	n_str = String(n);
	while (n_str.length < digit) {
	    n_str = "0" + n_str;
	}
	return n_str;
}

function modal_image_default() {
	modal_image_content.style.display = "block";
	modal_image.style.width = "auto";
	modal_image.style.height = "500px";
}

/* document.getElementById("img001").onclick = function() {
    modal_image_content.style.display = "block";
	modal_image.src = document.getElementById("img001").src;
	modal_image.style.width = "auto";
	modal_image.style.height = "500px";
	modal_image_desc.innerHTML = document.getElementById("img001d").innerHTML;
} */

/* document.getElementById("img001").onclick = function() {
    modal_image_default();
	modal_image.src = document.getElementById("img001").src;
	modal_image_desc.innerHTML = document.getElementById("img001d").innerHTML;
} */

// try {MathJax.typeset();} catch(err) {}
try {
	document.getElementById("img001").onclick = function() {modal_image_default(); modal_image.src = document.getElementById("img001").src; modal_image_desc.innerHTML = document.getElementById("img001d").innerHTML;}
    document.getElementById("img002").onclick = function() {modal_image_default(); modal_image.src = document.getElementById("img002").src; modal_image_desc.innerHTML = document.getElementById("img002d").innerHTML;}
    document.getElementById("img003").onclick = function() {modal_image_default(); modal_image.src = document.getElementById("img003").src; modal_image_desc.innerHTML = document.getElementById("img003d").innerHTML;}
    document.getElementById("img004").onclick = function() {modal_image_default(); modal_image.src = document.getElementById("img004").src; modal_image_desc.innerHTML = document.getElementById("img004d").innerHTML;}
    document.getElementById("img005").onclick = function() {modal_image_default(); modal_image.src = document.getElementById("img005").src; modal_image_desc.innerHTML = document.getElementById("img005d").innerHTML;}
    document.getElementById("img006").onclick = function() {modal_image_default(); modal_image.src = document.getElementById("img006").src; modal_image_desc.innerHTML = document.getElementById("img006d").innerHTML;}
    document.getElementById("img007").onclick = function() {modal_image_default(); modal_image.src = document.getElementById("img007").src; modal_image_desc.innerHTML = document.getElementById("img007d").innerHTML;}
    document.getElementById("img008").onclick = function() {modal_image_default(); modal_image.src = document.getElementById("img008").src; modal_image_desc.innerHTML = document.getElementById("img008d").innerHTML;}
    document.getElementById("img009").onclick = function() {modal_image_default(); modal_image.src = document.getElementById("img009").src; modal_image_desc.innerHTML = document.getElementById("img009d").innerHTML;}
    document.getElementById("img010").onclick = function() {modal_image_default(); modal_image.src = document.getElementById("img010").src; modal_image_desc.innerHTML = document.getElementById("img010d").innerHTML;}
    document.getElementById("img011").onclick = function() {modal_image_default(); modal_image.src = document.getElementById("img011").src; modal_image_desc.innerHTML = document.getElementById("img011d").innerHTML;}
    document.getElementById("img012").onclick = function() {modal_image_default(); modal_image.src = document.getElementById("img012").src; modal_image_desc.innerHTML = document.getElementById("img012d").innerHTML;}
    document.getElementById("img013").onclick = function() {modal_image_default(); modal_image.src = document.getElementById("img013").src; modal_image_desc.innerHTML = document.getElementById("img013d").innerHTML;}
    document.getElementById("img014").onclick = function() {modal_image_default(); modal_image.src = document.getElementById("img014").src; modal_image_desc.innerHTML = document.getElementById("img014d").innerHTML;}
    document.getElementById("img015").onclick = function() {modal_image_default(); modal_image.src = document.getElementById("img015").src; modal_image_desc.innerHTML = document.getElementById("img015d").innerHTML;}
    document.getElementById("img016").onclick = function() {modal_image_default(); modal_image.src = document.getElementById("img016").src; modal_image_desc.innerHTML = document.getElementById("img016d").innerHTML;}
    document.getElementById("img017").onclick = function() {modal_image_default(); modal_image.src = document.getElementById("img017").src; modal_image_desc.innerHTML = document.getElementById("img017d").innerHTML;}
    document.getElementById("img018").onclick = function() {modal_image_default(); modal_image.src = document.getElementById("img018").src; modal_image_desc.innerHTML = document.getElementById("img018d").innerHTML;}
    document.getElementById("img019").onclick = function() {modal_image_default(); modal_image.src = document.getElementById("img019").src; modal_image_desc.innerHTML = document.getElementById("img019d").innerHTML;}
    document.getElementById("img020").onclick = function() {modal_image_default(); modal_image.src = document.getElementById("img020").src; modal_image_desc.innerHTML = document.getElementById("img020d").innerHTML;}
    document.getElementById("img021").onclick = function() {modal_image_default(); modal_image.src = document.getElementById("img021").src; modal_image_desc.innerHTML = document.getElementById("img021d").innerHTML;}
    document.getElementById("img022").onclick = function() {modal_image_default(); modal_image.src = document.getElementById("img022").src; modal_image_desc.innerHTML = document.getElementById("img022d").innerHTML;}
    document.getElementById("img023").onclick = function() {modal_image_default(); modal_image.src = document.getElementById("img023").src; modal_image_desc.innerHTML = document.getElementById("img023d").innerHTML;}
    document.getElementById("img024").onclick = function() {modal_image_default(); modal_image.src = document.getElementById("img024").src; modal_image_desc.innerHTML = document.getElementById("img024d").innerHTML;}

    for (let i = 5; i <= 4; i++) {
	    img_i = "img" + addzero(i);
        img_i_d = "img" + addzero(i) + "d";
	    console.log(img_i);
        document.getElementById(img_i).onclick = function() {
            modal_image_content.style.display = "block";
	        modal_image.src = document.getElementById(img_i).src;
	        modal_image.style.width = "auto";
	        modal_image.style.height = "500px";
	        modal_image_desc.innerHTML = document.getElementById(img_i_d).innerHTML;
        }
    }

    document.getElementById("imgclose").onclick = function() { 
        modal_image_content.style.display = "none";
    }
} catch(err) {
}
