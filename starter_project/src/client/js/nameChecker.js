function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let urls = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ];

    if(urls.includes(inputText)) {
        alert("Welcome, Captain!");
    }
    else {
        alert("Enter a valid URL");
    }
}

export { checkForName };
