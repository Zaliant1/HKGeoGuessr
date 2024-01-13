const problem = require("express").Router();

problem.get("/problem", async (req, res) => {
  // try {
  //   const totalCount = await YourModel.count();
  //   const pastGuesses = req.body;
  //   const getUnplayed = async () => {
  //     const randomId = Math.floor(Math.random() * totalCount) + 1;
  //     if (!pastGuesses.includes(randomId)) {
  //       const randomEntry = await YourModel.findOne({
  //         where: {
  //           id: randomId,
  //         },
  //       });
  //       res.send(randomEntry);
  //     } else {
  //       await getUnplayed();
  //     }
  //   };
  //   await getUnplayed();
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).send("Internal Server Error");
  // }
});

module.exports = problem;
