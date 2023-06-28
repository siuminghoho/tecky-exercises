var a = 1;

let b = 2;

const c = 3;

d = 4;

e = 5;

f = 6;

g = a + d - a;

h = c - b;

i = g * h;

j = f / c;

k = e % b;

console.log(g)

console.log(h)

console.log(i)

console.log(j)

console.log(k)


// Declare variables
const PTS = 25; // Points scored
const REB = 8; // Total rebounds
const AST = 6; // Total assists
const STL = 2; // Total steals
const BLK = 1; // Total blocks
const FGM = 10; // Field goals made
const FGA = 15; // Field goals attempted
const FTM = 5; // Free throws made
const FTA = 7; // Free throws attempted
const TOV = 3; // Total turnovers

// Calculate efficiency
const efficiency = PTS + REB + AST + STL + BLK - (FGA - FGM) - (FTA - FTM) - TOV;

// Print efficiency
console.log("Efficiency: " + efficiency);
