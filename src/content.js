function findSpecificLiElements() {
    const lists = document.querySelectorAll('ul[role="list"]');
    lists.forEach(list => {
        const listItems = list.querySelectorAll('li');
        listItems.forEach(li => {
            const link = li.querySelector('a[href="/news/world/us_and_canada"]');
            if (link) {
                li.remove()
            }
        });
    });
}

// Call the function to find and log the specific li elements
findSpecificLiElements();
