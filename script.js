function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
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
