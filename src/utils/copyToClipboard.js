'use client'
const copyToClipboard = (textTOCopy) => {
    const textArea = document.createElement("textarea");
    textArea.value = textTOCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
}

export default copyToClipboard;