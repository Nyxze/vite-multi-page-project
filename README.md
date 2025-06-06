# Vite Multi-Page Project Example

This project is an example of how to configure a multi-page website using [Vite](https://vitejs.dev/).

## Project Structure

The key to the multi-page setup is in `vite.config.js`.

-   `root: 'src'`: This line sets the project root to the `src` directory. The dev server will serve files from this directory.
-   `build.rollupOptions.input`: This object is where each page is defined as an entry point for the build process.

```
/
├── dist/                     # Build output
├── public/                   # Static assets
├── src/                      # Project root
│   ├── about/
│   │   └── index.html        # About page
│   ├── new/
│   │   └── index.html        # New page
│   ├── style/
│   │   └── style.css
│   ├── index.html            # Main page (home)
│   └── main.js               # Main script for home page
├── .gitignore
├── package.json
└── vite.config.js            # Vite configuration
```

## Usage

### Dependencies

Install the project dependencies using npm:

```bash
npm install
```

### Development Server

To start the Vite development server:

```bash
npm run dev
```

This will start a local server, and you can access the pages at:

-   Home: `http://localhost:5173/`
-   About: `http://localhost:5173/about/`
-   New: `http://localhost:5173/new/`

### Build

To build the project for production:

```bash
npm run build
```

## Build Output

The build output will be placed in the `dist` directory. The structure will be:

```
/
└── dist/
    ├── assets/
    │   ├── index-*.js        # Bundled JavaScript
    │   └── index-*.css       # Bundled CSS
    ├── about/
    │   └── index.html        # Processed about page
    ├── new/
    │   └── index.html        # Processed new page
    └── index.html            # Processed main page
```

Vite will automatically bundle your assets (JavaScript, CSS) and place them in the `dist/assets` directory with hashed filenames for cache busting. The HTML files will be updated to link to these bundled assets correctly. 