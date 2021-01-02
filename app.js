const searchBtn = document.getElementById("search-button");
searchBtn.addEventListener("click", function () {
  const searchText = document.getElementById("search-box").value;
  // console.log(searchBox);
  fetch(`https://api.lyrics.ovh/suggest/${searchText}`)
    .then((response) => response.json())
    .then((allData) => {
      console.log(allData.data);
      for (let i = 0; i < allData.data.length; i++) {
        const element = allData.data[i];
        const findTitle = element.title;
        const albumName = element.artist.name;
        // console.log(albumName);
        // console.log(findTitle);
        // document.getElementById("song-title").innerText = findTitle;
        // document.querySelectorAll('.song-title').innerText = findTitle;
        const detailSection = document.getElementById("song-details");
        const createP = document.createElement("p");
        createP.innerHTML = `<p class="lead"><strong>${findTitle}</strong> 
        Album by <span>${albumName}</span> 
        <button onclick="lyric()" class="btn btn-success">Get Lyrics</button></p>`;
        detailSection.appendChild(createP);
      }
    });
});

function lyric(){
    const lyricSection = document.getElementById('create-lyrics');
    // const createPre = document.createElement("pre");
    lyricSection.style.display = "block";

}
