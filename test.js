const referenceWords = referenceText.split(" ");
const userWords = userText.split(" ");
const highlightedReferenceWords = [];

let userIndex = 0;

for (let i = 0; i < referenceWords.length; i++) {
  if (userWords[userIndex] === referenceWords[i]) {
    highlightedReferenceWords.push(
      `<span style="color: green;">${referenceWords[i]}</span>`
    );
    userIndex++;
  } else {
    highlightedReferenceWords.push(
      `<span style="color: red;">${userWords[userIndex] || ""}</span>`
    );
  }
}

// Check if any words were skipped in user text
if (userIndex < userWords.length) {
  while (userIndex < userWords.length) {
    highlightedReferenceWords.push(
      `<span style="color: blue;">${userWords[userIndex]}</span>`
    );
    userIndex++;
  }
}

const highlightedReferenceText = highlightedReferenceWords.join(" ");

resultElement.innerHTML = `Levenshtein Accuracy: ${levenshteinAccuracy}%`;
referenceDiv.innerHTML = highlightedReferenceText;
