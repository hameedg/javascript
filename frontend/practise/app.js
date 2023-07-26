// const gameList = [];
// const fetchData = (callback) => {
//   setTimeout(
//     (callback) => {
//       gameList.push(
//         {
//           name: "game 1",
//           id: "xsdasdsda",
//         },
//         {
//           name: "game 2",
//           id: "csdsddasdsda",
//         },
//         {
//           name: "game 3",
//           id: "zsdasdsda",
//         }
//       );
//       callback();
//       console.log("This is console log after fetching");
//     },
//     4000,
//     callback
//   );
// };

// const displayGame = () =>
//   setTimeout(() => {
//     for (let i = 0; i < gameList.length; i++) {
//       console.log(i);
//     }
//     console.log("console log after displaying");
//   }, 1000);

// fetchData(displayGame);
const users = [];

const fetchData = (users = []) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users.push({ name: "hameed" });
      if (users.length > 0) resolve("Fetched successfully");
      else reject("User not added");
    }, 2000);
  });
};

fetchData(users)
  .then((mes) => console.log(mes))
  .catch((mes) => console.log(mes))
  .finally((mes) => console.log("iam to kabhi bhi execute hotu"));
