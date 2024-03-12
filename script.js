function firstWord(s) {
  // your code here
	if (!s.includes(' ')) {
    // If the string doesn't contain any space, return the entire string
    return s;
  } else {
    // Otherwise, find the index of the first space and extract the substring before it
    return s.substring(0, s.indexOf(' '));
  }
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
