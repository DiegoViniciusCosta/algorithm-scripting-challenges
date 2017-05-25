// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  return str
    .split(' ')
    .map(function(a){
      return a[0].toUpperCase() + a.substr(1).toLowerCase();
    })
    .join(' ');
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));