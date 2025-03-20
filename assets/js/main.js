function calculateFriendship(event) {
    event.preventDefault(); // Prevent form submission first

    var name1 = document.getElementById("name1").value.trim().toLowerCase();
    var name2 = document.getElementById("name2").value.trim().toLowerCase();
    
    if (name1 === "" || name2 === "") {
        alert("Please enter both names!");
        return;
    }

    // Convert names to sets of unique letters
    let set1 = new Set(name1);
    let set2 = new Set(name2);
    
    // Find common letters
    let commonLetters = [...set1].filter(letter => set2.has(letter)).length;
    let totalUniqueLetters = new Set([...name1, ...name2]).size;
    
    // Calculate percentage
    let friendshipPercentage = Math.floor((commonLetters / totalUniqueLetters) * 100);
    
    // Show the result on the page
    document.getElementById("result").innerText = 
        `${name1} and ${name2}'s friendship is ${friendshipPercentage}% strong!`;

    // Now submit the form to Google Forms
    document.getElementById("friendshipForm").submit();
}