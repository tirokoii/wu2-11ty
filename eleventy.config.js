export default function (eleventyCofig) {
    
    eleventyCofig.addPassthroughCopy("css");
    eleventyCofig.addPassthroughCopy("images");
    
    return {
        markdownTempletEngine: "njk",
    }
}
