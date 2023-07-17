export default async function copyToClipboard(text: string){
    const clipboardText = await navigator.clipboard.readText();
    
    await navigator.clipboard.writeText(`${text}`);
}