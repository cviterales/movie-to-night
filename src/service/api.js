import axios from "axios";
const api = "http://www.omdbapi.com";
const key = "apikey=8c9649d4";

export const dataService = {
  getMovieByName,
};

async function getMovieByName(value) {
  let valuetoSearch = ['BLACK PANTHER','AVENGERS: ENDGAME','TOY STORY 4','THE IRISHMAN','LITTLE WOMEN','THE FAREWELL','BOOKSMART','A BEAUTIFUL DAY IN THE NEIGHBORHOOD']
  let data = [];
  for (let i = 0; i <= 7; i++) {
    let options = {
      method: "get",
      url: `${api}/?t=${valuetoSearch[i]}&${key}`,
    };
    await axios(options)
      .then((res) => {
        //data = res.data;
        data.push(res.data);
      })
      .catch((error) => console.warn("fetch error:", error));
  }
  console.log(data)
  return data;
}
