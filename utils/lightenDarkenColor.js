export function lightenDarkenColor(col, amt) {
   let usePound = false;

   if (col[0] == '#') {
      col = col.slice(1);
      usePound = true;
   }

   let num = parseInt(col, 16);

   let r = (num >> 16) + amt;

   if (r > 255) r = 255;
   else if (r < 0) r = 0;

   let b = ((num >> 8) & 0x00ff) + amt;

   if (b > 255) b = 255;
   else if (b < 0) b = 0;

   let g = (num & 0x0000ff) + amt;

   if (g > 255) g = 255;
   else if (g < 0) g = 0;

   // return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
   return (
      (usePound ? '#' : '') +
      String('000000' + (g | (b << 8) | (r << 16)).toString(16)).slice(-6)
   );
}

export function darkenFixed(r, g, b) {
   const minDark = 100;
   const darkenBy = 90;
   const newColors = [r, g, b].map((clr) =>
      clr - darkenBy < minDark ? minDark : clr - darkenBy
   );
   console.log(newColors);

   return `rgb(${newColors[0]},${newColors[1]},${newColors[2]})`;
   // return `rgb(${minDark},${minDark},${minDark})`;
}
