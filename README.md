# PokeCards

PokeCards is a simple, interactive web application that allows users to search, select, and view details about their favorite Pokémon using the [PokéAPI](https://pokeapi.co/).

## Features

- **Search and Filter:** Quickly find Pokémon by typing their names into the search bar. The list updates dynamically as you type.
- **Multiple Selection:** Select one or multiple Pokémon from the list (using `Ctrl + Click` or `Cmd + Click`).
- **Persistent Selection:** Your selected Pokémon remain saved in the background even while you filter and search for other Pokémon.
- **Detailed Pokémon Cards:** Once selected, click the "Mostrar Selecionado(s)" button to generate visually appealing cards displaying the Pokémon's:
  - Sprite (Image)
  - Name
  - Weight (in kg)
  - Type(s)
- **Responsive Layout:** The application utilizes modern CSS (Flexbox and Grid) to display the cards in an organized and responsive manner.

## Technologies Used

- **HTML5:** Semantic structure.
- **CSS3:** Styling, Flexbox, and CSS Grid for layout management.
- **JavaScript (Vanilla):** ES6+ features including `async/await`, Fetch API, and Sets for state management.
- **[PokéAPI](https://pokeapi.co/):** External RESTful API used to fetch Pokémon data.

## How to Run

1. Clone or download the repository.
2. Open the `index.html` file in any modern web browser.
3. No build tools or local servers are required!

## Usage

1. Use the search input to filter the list of available Pokémon.
2. Click on a Pokémon name in the dropdown list to select it. Hold `Ctrl` (or `Cmd` on Mac) while clicking to select multiple Pokémon.
3. Click the **"Mostrar Selecionado(s)"** (Show Selected) button to render the cards of the Pokémon you have chosen.

---
