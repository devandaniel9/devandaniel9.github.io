// Search

document.getElementById("search").innerHTML = `
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