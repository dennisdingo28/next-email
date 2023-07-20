export default function isValidColor(colorString: string) {
    // Regular expression to match different color formats
    const colorRegex = /^(#([0-9A-Fa-f]{3}){1,2}|(rgba?)\(\d{1,3}, \d{1,3}, \d{1,3}(, \d?(\.\d+)?)?\))$/;
  
    return colorRegex.test(colorString);
}