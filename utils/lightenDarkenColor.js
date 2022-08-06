export function colorSwitcher2(color, percent) {
   const num = parseInt(color.replace('#', ''), 16),
      amt = Math.round(2.55 * percent),
      R = (num >> 16) + amt,
      B = ((num >> 8) & 0x00ff) + amt,
      G = (num & 0x0000ff) + amt;
   return (
      '#' +
      (
         0x1000000 +
         (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
         (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
         (G < 255 ? (G < 1 ? 0 : G) : 255)
      )
         .toString(16)
         .slice(1)
   );
}

// ???
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

export function darkenMarker(r, g, b) {
   const minDark = 100;
   const darkenBy = 90;
   const newColors = [r, g, b].map((clr) =>
      clr - darkenBy < minDark ? minDark : clr - darkenBy
   );
   console.log(newColors);

   return `rgb(${newColors[0]},${newColors[1]},${newColors[2]})`;
   // return `rgb(${minDark},${minDark},${minDark})`;
}
