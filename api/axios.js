const form = document.querySelector("#searchForm");
const input = document.querySelector("#search");
const ul = document.querySelector("#shows");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  ul.innerHTML = "";
  const query = input.value;
  const config = { params: { q: query } };
  try {
    const shows = await axios.get(
      `https://api.tvmaze.com/search/shows`,
      config
    );
    shows.data.map((tvshow) => {
      const img = document.createElement("img");
      img.src = tvshow.show.image.medium;
      ul.append(img);
    });
    input.value = "";
  } catch (error) {
    console.log(error);
  }
});
