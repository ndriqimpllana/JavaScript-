



const student = {
  name: 'Leila',
  scores: [95, 87, 90],
};

// TODO:// - Destructure the name
// - Destructure the first and third scores
// - Log: "Leila scored 95 and 90"

const { name, scores:[firstScore, ,thirdScore]} = student;

console.log(`${name} scores are ${firstScore} and ${thirdScore}`);
