document.documentElement.style.scrollBehavior = 'smooth';

// Optional: You can also implement a custom smooth scroll to a specific element on the page
function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

// Example usage: Scroll to an element with ID "target" on a button click
document.getElementById("scrollButton").addEventListener("click", function() {
  scrollToElement("target");
});