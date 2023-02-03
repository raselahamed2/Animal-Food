/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    themes:{
      mytheme: {
          
        "primary": "#f46f30",
                 
        "secondary": "#343232",
                 
        "accent": "#343232",
                 
        "neutral": "#FFF6E3",
                 
        "base-100": "#000000",
                 
        "info": "#0000FF",
                 
        "success": "#008000",
                 
        "warning": "#FFFF00",
                 
        "error": "#FF0000",
        
                 },
    }
  },
  plugins: [require("daisyui")],
}
