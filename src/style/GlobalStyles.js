import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* sm - 640px - md - 768px - lg - 1024px - xl - 1280px - 2xl - 1536px */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');

:root {
    /* basic */
    --clr-black: #000;
    --clr-white: #fff;
    --clr-font: #37474F;

    /* variants (info, success, warning, alert) */
    --clr-sky-100: #e0f2fe;
    --clr-sky-500: #0ea5e9;
    --clr-sky-700: #0369a1;
    --clr-green-100: #D1FAE5;
    --clr-green-500: #22c55e;
    --clr-green-700: #047857;
    --clr-yellow-100: #FEF9C3;
    --clr-yellow-500: #eab308;
    --clr-yellow-700: #CA8A04;
    --clr-indigo-100: #E0E7FF;
    --clr-indigo-500: #6366F1;
    --clr-indigo-700: #4338CA;

    /* alert */
    --clr-red-100: #FEE2E2;
    --clr-red-500: #EF4444;
    --clr-red-700: #B91C1C;


    /* Gray */
    --clr-gray-50: #F9FAFB;
    --clr-gray-100: #F3F4F6;
    --clr-gray-200: #E5E7EB;
    --clr-gray-300: #D1D5DB;
    --clr-gray-400: #9CA3AF;
    --clr-gray-500: #6B7280;
    --clr-gray-600: #4B5563;
    --clr-gray-700: #374151;
    --clr-gray-800: #1F2937;
    --clr-gray-900: #111827;
    --clr-gray-950: #030712;

    /* radius */
    --radius-sm: .3rem;
    --radius-md: .5rem;
    --radius-lg: .7rem;
    --radius-xl: .9rem;

    /* letter spacing */
    --tracking-sm: .03rem;
    --tracking-md: .05rem;
    --tracking-lg: .07rem;

    /* differents */
    --ff-primary: "Outfit", sans-serif;
    --gap: 0rem;

    /* Indigo */
    --clr-indigo-50: #EEF2FF;
    --clr-indigo-100: #E0E7FF;
    --clr-indigo-200: #C7D2FE;
    --clr-indigo-300: #A5B4FC;
    --clr-indigo-400: #818CF8;
    --clr-indigo-500: #6366F1;
    --clr-indigo-600: #4F46E5;
    --clr-indigo-700: #4338CA;
    --clr-indigo-800: #3730A3;
    --clr-indigo-900: #312E81;
    --clr-indigo-950: #1E1B4B;

    /* Red */
    --clr-red-50: #FEF2F2;
    --clr-red-100: #FEE2E2;
    --clr-red-200: #FECACA;
    --clr-red-300: #FCA5A5;
    --clr-red-400: #F87171;
    --clr-red-500: #EF4444;
    --clr-red-600: #DC2626;
    --clr-red-700: #B91C1C;
    --clr-red-800: #991B1B;
    --clr-red-900: #7F1D1D;
    --clr-red-950: #450A0A;
}
*,*::after,*::before {
    border: none;
    outline: none;
    box-sizing: inherit;
    background: none;
    margin: 0;
    padding: 0;
    font-size: inherit;
    color: inherit;
    font-family: inherit;
    letter-spacing: inherit;
}

html {font-size: 50%;}
body {box-sizing: border-box;font-family: var(--ff-primary);font-weight: 400;font-size: 1.7rem;letter-spacing: var(--tracking-lg);color: var(--clr-font);}
ul {list-style-type: none;}
img {width: 100%; object-fit: cover; object-position: center;}
a {text-decoration: none;cursor: pointer;}

nav a::before {display: block;content: attr(title);font-weight: 700;height: 0;overflow: hidden;visibility: hidden;}

::-webkit-progress-bar {border-radius: 1rem;}
::-webkit-progress-value {background-color: var(--clr-primary);border-radius: 1rem;transition: .3s ease-out;}

ion-icon {font-size: 2.5rem;color: inherit;cursor: pointer;transition: color .3s}

input {border: 2px solid var(--clr-gray-200);padding: 1rem;transition: border .3s;}
input:focus {border-color: var(--clr-gray-500);}
button {height: min-content;cursor: pointer;transition-duration: .3s;transition-property: color, background-color, border;}
::placeholder {color:var(--clr-gray-300)}

label.checkbox {display: flex;gap: 2rem;cursor: pointer;}
input[type="checkbox"] {display: none;}
.checkmark {position: relative;height: 25px;width: 25px;border: 1px solid var(--clr-primary); background-color: var(--clr-gray-100);}
.checkmark:after {content: "";position: absolute;display: none;left: 9px;top: 3px;width: 7px;height: 15px;border: solid white;border-width: 0 3px 3px 0;transform: rotate(45deg);}
label.checkbox:hover > .checkmark, input[type="checkbox"]:hover ~ .checkmark {background-color: var(--clr-gray-2);}
input[type="checkbox"]:checked ~ .checkmark {background-color: var(--clr-primary);}
input[type="checkbox"]:checked ~ .checkmark:after {display: block;}

/* query */
@media (min-width: 480px) {html {font-size: 53%;}}
@media (min-width: 768px) {html {font-size: 55%;}}
@media (min-width: 1024px) {html {font-size: 62.5%;}}
`

export default GlobalStyles