export function invertRgb(rgb) {
   rgb = rgb.replace(/[^\d,]/g, '').split(',');
   if (!rgb) return false;
   const inverted = rgb.map((clr) => {
      let newClr = clr > 127.5 ? Number(clr) - 70 : Number(clr) + 70;
      //dont want too dark
      // let newClr = Number(clr) + 127.5;
      // newClr = newClr > 170 ? 170 : newClr;
      newClr = newClr > 255 ? 255 : newClr;
      // newClr = newClr < 30 ? 30 : newClr;
      return Math.round(newClr);
   });

   return `rgb(${inverted.join(',')})`;
}
