const baseUrl = 'https://cataas.com';

async function fetchData() {
    const response = await fetch(`${baseUrl}/cat`,
    {
    headers: {
        Accept: "application/json",
      },
    method: "GET",
    })
    .then(res => {
        return res
    });
    return response.url;
}

async function spreadImgOnDiv () {
    const imgSrc = await fetchData();
    const imgElement = document.getElementById("content");
    imgElement.innerHTML= `<img src=${imgSrc}>`;
}

const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', spreadImgOnDiv);
