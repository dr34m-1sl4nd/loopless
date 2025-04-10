function printNoLoop() {
    const noLoop = parseInt(document.getElementById("noLoop").value, 10); // NOTE TO SELF: parseInt converts a string to an integer. "10" is the base used.
    const printedResult = document.getElementById("result");

    if (isNaN(noLoop) || noLoop < 2) {
        printedResult.textContent = `Please enter a number greater than 1.`; //if the input is not a number OR it's less than two, give the user the following message.
    } else {
        let result = ""; //clear the message
        for (let i = 1; i <= noLoop; i++) {
            result += i + (i === noLoop ? "" : " ");
        }
        printedResult.textContent = result;
    }
}