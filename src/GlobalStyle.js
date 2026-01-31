import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   :root{
      --primary: #6366f1;
      --primary-dark: #4f46e5;
      --accent: #ec4899;
      --accent-hover: #db2777;
      --neutral-50: #fafafa;
      --neutral-100: #f4f4f5;
      --neutral-200: #e4e4e7;
      --neutral-500: #71717a;
      --neutral-700: #3f3f46;
      --neutral-900: #18181b;
      --surface: #ffffff;
      --border: #e4e4e7;
      --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
      --radius-sm: 0.5rem;
      --radius-md: 0.75rem;
      --radius-lg: 1rem;
      --radius-xl: 1.5rem;
      --radius-2xl: 2rem;
      --transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
   }
   *{
      margin: 0;
      padding: 0;
      list-style: none;
      box-sizing: border-box;
      font-family: 'Outfit', sans-serif;
      text-decoration: none;
   }

   body{
      background: linear-gradient(180deg, var(--neutral-50) 0%, var(--neutral-100) 100%);
      color: var(--neutral-900);
      font-size: 1.125rem;
      font-family: 'Outfit', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
   }
   a{
      color: inherit;
      transition: color var(--transition);
   }
   a:hover{
      color: var(--primary);
   }
   p{
      color: var(--neutral-500);
      line-height: 1.75;
   }
   .secondary-heading{
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 700;
      color: var(--neutral-900);
      letter-spacing: -0.02em;
      line-height: 1.2;
   }
   .small-heading{
      font-size: clamp(1.75rem, 3vw, 2.5rem);
      font-weight: 700;
      color: var(--neutral-900);
      text-align: center;
      letter-spacing: -0.02em;
   }

   span{
      color: var(--accent);
      font-weight: 600;
   }

   .c-para{
      text-align: center;
   }

`;

export default GlobalStyle;