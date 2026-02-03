import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}



export function convertToPx(value, context = document.documentElement) {
  if (typeof value === 'number') return value;
  if (!value) return 0;
  const unit = value.match(/[a-z%]+$/i)?.[0];
  if (typeof parseInt(value) === 'number' && !unit) return parseInt(value);
  const number = parseFloat(value);

  const fontSize = parseFloat(getComputedStyle(context).fontSize);

  switch (unit) {
    case 'px':
      return number;
    case 'em':
    case 'rem':
      const base =
        unit === 'em'
          ? fontSize
          : parseFloat(getComputedStyle(document.documentElement).fontSize);
      return number * base;
    case '%':
      // Percentage of parent element's height (default context is <html>)
      return (number / 100) * context.clientHeight;
    case 'vw':
      return (number / 100) * window.innerWidth;
    case 'vh':
      return (number / 100) * window.innerHeight;
    case 'vmin':
      return (number / 100) * Math.min(window.innerWidth, window.innerHeight);
    case 'vmax':
      return (number / 100) * Math.max(window.innerWidth, window.innerHeight);
    case 'pt':
      return number * (96 / 72); // 1pt = 1/72in, 1in = 96px
    case 'cm':
      return number * 37.795275591; // 1cm = ~37.8px
    case 'mm':
      return number * 3.7795275591;
    case 'in':
      return number * 96;
    case 'pc': // pica = 1/6 inch
      return number * 16;
    case 'ex':
    case 'ch':
      // Estimate ex as 0.5em, ch as 0.5em (approximation)
      return number * fontSize * 0.5;
    default:
      return false;
  }
}