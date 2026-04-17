/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        lato: ['Lato', 'sans-serif'],
        sans: ['Lato', 'sans-serif'],
      },
      colors: {
        // Paleta de cores Xá das Cinco (personalizadas em HEX)
        'xd-light': '#F4F3F2',        // Cor de Fundo Principal
        'xd-gold': '#C4B09D',         // Cor de Destaque (Beige/Gold)
        'xd-taupe': '#8C8A82',        // Cor Neutra/Intermediária
        'xd-charcoal': '#504D4B',     // Cor Escura (Textos Principais)
        
        // Alias para compatibilidade
        'brand-primary': '#504D4B',
        'brand-secondary': '#8C8A82',
        'brand-accent': '#C4B09D',
      },
    },
  },
  plugins: [],
}
