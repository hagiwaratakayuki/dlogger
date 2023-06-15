 /**
* @param {string} word;
* @returns {string} 
*/
export function wordWrapper(word, wrapCount = 50) {
    return (word || "").slice(0, wrapCount) + '…';
}