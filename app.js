

const searchBtn = document.getElementById("search-button");
searchBtn.addEventListener("click", function(){
    const searchText = document.getElementById("search-box").value;
    // console.log(searchBox);
    fetch(`https://api.lyrics.ovh/suggest/${searchText}`)
      .then((response) => response.json())
      .then((allData) => {
        // console.log(allData.data);
        for (let i = 0; i < allData.data.length; i++) {
          const element = allData.data[i];
          const findTitle = element.title;
          console.log(findTitle);
        //   document.getElementById("search-box").value = findTitle;
        //   console.log(element.title);
        }
      });
      
})

