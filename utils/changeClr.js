export function changeClr(rgb, howMuch) {
   rgb = rgb.replace(/[^\d,]/g, '').split(',');
   if (!rgb) return false;
   const inverted = rgb.map((clr) => {
      let newClr = Number(clr) + howMuch;
      //dont want too dark
      // let newClr = Number(clr) + 127.5;
      // newClr = newClr > 170 ? 170 : newClr;
      newClr = newClr > 255 ? 255 : newClr;
      newClr = newClr < 0 ? 0 : newClr;
      return Math.round(newClr);
   });

   return `rgb(${inverted.join(',')})`;
}
