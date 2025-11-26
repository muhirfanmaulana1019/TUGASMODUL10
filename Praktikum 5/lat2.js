let isHighlighted = false;

function highlightText() {
    const spans = document.querySelectorAll("p span");
    spans.forEach(span => {
        if (!isHighlighted) {
            span.classList.add("highlight");
        } else {
            span.classList.remove("highlight");
        }
    });
    isHighlighted = !isHighlighted;
}