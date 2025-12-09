// Search

document.getElementById("search").innerHTML = `
<form id="google-search-form" style="padding-top:5px" action="https://www.google.com/search" method="get" target="_blank">
    <input type="text" class="search" name="q" id="search-input" placeholder="Search in this website..." required>
    <input type="hidden" name="sitesearch" value="devandaniel9.github.io">
    <button type="submit" id="searchbtn">Search</button>
</form>
`

// OPTIONAL: Menambahkan fokus otomatis saat halaman dimuat (tidak wajib)
// document.getElementById('search-input').focus();

document.getElementById('google-search-form').addEventListener('submit', function(event) {
	// Ambil input yang dimasukkan pengguna
	const userInput = document.getElementById('search-input').value;

	// Ambil input tersembunyi untuk domain (sitesearch)
	const siteSearchInput = this.querySelector('input[name="sitesearch"]');
	const siteDomain = siteSearchInput.value;

	// Format query Google: "input_pengguna site:domain_anda"
	// Google secara otomatis menggabungkannya karena ada field 'sitesearch'
	// Jika Anda ingin format yang lebih eksplisit:
	// this.querySelector('input[name="q"]').value = userInput + ' site:' + siteDomain;

	// Formulir akan otomatis disubmit ke Google
});

/* document.getElementById("search").innerHTML = `
<input type="text" class="search" style="margin:5px;" onkeyup="myFunction()" placeholder="Search...">
<button id="searchbtn" onclick="openSearch()">Search</button>&nbsp;&nbsp;
<!-- The Modal -->
<div id="search-modal" class="modal">
    <!-- Modal content -->
    <div class="modal-content" style="padding-left:20px;">
        <!-- <span class="close">&times;</span> -->
        <div class="closebtn2" onclick="closeSearch()"><img src="images/close-icon.png" width="20"></div>
        <span style="font-size:26px;"><b>Hasil Pencarian</b></span><br>
        <p>
            ..........<br>..........<br>..........<br>..........<br>..........<br><br>
            [Under Construction]
        </p>
    </div>
</div>
`

// Get the modal
var searchmodal = document.getElementById("search-modal");

function openSearch() {
    searchmodal.style.display = "block";
}
function closeSearch() {
    searchmodal.style.display = "none";
}

*/