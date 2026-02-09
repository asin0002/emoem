// 1. Select the gallery element from the DOM
const $gallery =document.getElementById('emoji-gallery');

//  array of emoji codes
const emojiCodes = [
  128512, 128513, 128514, 128515, 128516, 128517, 
  128518, 128519, 128520, 128521, 128522, 128523
];

// 3. Create an empty array to store the HTML for each emoji card
const emojiCards = [];

// 4. Loop over the array to build the HTML for each emoji
for (const code of emojiCodes) {
  // Requirement: Include decimal reference next to character
  emojiCards.push(`
    <div class="card">
      <span class="emoji">&#${code};</span>
      <code>${code}</code>
    </div>
  `);
}

// 5. Add all emojis to the grid at once for better performance
$gallery.innerHTML = emojiCards.join('');