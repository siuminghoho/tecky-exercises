function rnaTranscription(DNA) {
    var RNA = "";
    for (var i = 0; i < DNA.length; i++) {
        switch (DNA[i]) {
            case "G":
                RNA += "C";
                break;
            case "C":
                RNA += "G";
                break;
            case "T":
                RNA += "A";
                break;
            case "A":
                RNA += "U";
                break;
            default:
                // Handle invalid DNA characters
                console.log("Invalid DNA character: " + DNA[i]);
                break;
        }
    }
    console.log(RNA);
    return RNA;
}

// Example usage
var DNA = "GCTAGCT";
var RNA = rnaTranscription(DNA);