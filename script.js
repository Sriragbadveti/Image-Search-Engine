const form = document.querySelector(".searchForm");
const userInput = document.querySelector(".searchField");
const output = document.querySelector(".resultsdiv");
const showmoreButton = document.querySelector(".more");


let keyword = "";
let page = 1;

let accesskey = "-1YETintYMt2UWfjv-2XUgcQCrbHHbro8wAXNWWimbs";


async function generateImages() {



    keyword = userInput.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
    let response = await fetch(url);
    let data = await response.json();
    let printImages = data.results;
    console.log(data);

    if (page === 1) {

        output.innerHTML = "";
    }

    printImages.map(function (result) {
        let newImage = document.createElement("img");
        newImage.src = result.urls.small;
        let imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(newImage);
        output.appendChild(imageLink);




    })

    showmoreButton.style.display = "block";


}

form.addEventListener("submit", function (dets) {
    dets.preventDefault();
    page = 1;
    generateImages();
})

showmoreButton.addEventListener("click", function () {
    page++;
    generateImages();

})