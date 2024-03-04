// Script

// function w3_open() {
//     document.getElementById("mySidebar").style.display = "block";
// }

// function w3_close() {
//     document.getElementById("mySidebar").style.display = "none";
// }

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("mybacksidebar").style.display = "block";
    document.getElementById("mybacksidebar").style.width = "100%";
    document.getElementById("mybacksidebar").style.height = "100%";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("mybacksidebar").style.display = "none";
    document.getElementById("mybacksidebar").style.width = "0";
    document.getElementById("mybacksidebar").style.height = "0";
    // document.body.style.backgroundColor = "rgba(0,0,0,0)";
}

document.getElementById("boxlink").innerHTML = `
<a href="index.html">Home</a>
<a href="blog.html">Blog</a>
<a href="fakta.html">Fakta</a>
<a href="profil.html">Profil</a>
<a href="portofolio.html">Portofolio</a>
<a href="hasil-karya.html">Hasil Karya</a>
<a href="timeline.html">Timeline</a>
<a href="updates.html">Updates</a>
<a href="projects.html">Projects</a>
`;
