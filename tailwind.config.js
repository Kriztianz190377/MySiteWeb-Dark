/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
           fontFamily: {
        'Raleway':["Raleway", "sans-serif"]
      },
      
      colors: {
        "bgDark": "#0a192f",
        "textColorLight": " #fff",
        "bgLight": "#ffffff",
        "textColorDark": "#000000",
        "hover": "#C83A6E",        
      },

    },
  },
  plugins: [],
}

/* 
:root {
  --bg-dark: #0a192f;              *
  --text-color-light: #fff;        *

  --bg-light: #ffffff;             *
  --text-color-dark: #000000;        * 
 
  --hover:#C83A6E;                 *

  --font-main:'Raleway', sans-serif;
}

.dark {
  background-color: var(--bg-dark) ;
  color: var(--text-color-light);
}

.light {
  background: var(--bg-light);
  color: var(--text-color-dark);
}

.app {
  font-family: var(--font-main); 
    position: relative;
  font-weight: 600;
  letter-spacing: 0.2rem;
}
.container{
  width: 85%;
  margin: 0 auto;
} */
/* 

.content{
  width: 85%;
} */