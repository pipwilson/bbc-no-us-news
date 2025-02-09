function findSpecificLiElements() {

    const lists = document.querySelectorAll('ul[role="list"], ol[role="list"]');
    lists.forEach(list => {
        const listItems = list.querySelectorAll('li');
        listItems.forEach(li => {
            const links = li.querySelectorAll('a[href="/news/world/us_and_canada"]');
            if (links.length > 0) {
                // li.style.backgroundColor = 'red';

                // remove the article text
                const promoContentElements = li.querySelectorAll('*');
                promoContentElements.forEach(element => {
                    element.classList.forEach(className => {
                        if (className.endsWith('PromoContent') || className.endsWith('LinkPostContent')) {
                            element.remove();
                        }
                    });
                });

                // remove the article image
                const imageSource = li.querySelector('source');
                if(imageSource != null) {
                    imageSource.remove();
                }

                const image = li.querySelector('img');
                if(image != null && image instanceof HTMLImageElement && image.src != null) {
                    const photoUrl = 'https://placedog.net/'+image.width+'/'+image.height+'?random&timestamp='+new Date().getTime();
                    image.srcset = photoUrl;
                    image.src = photoUrl;
                    image.alt='This is a photo of a nice dog';
                    // image.src='https://placecats.com/'+image.width+'/'+image.height+'';
                }
            }
        });
    });
}


function runAfterLoad() {
    // setTimeout(findSpecificLiElements, 1000); // Wait for 1 second before running the function
    findSpecificLiElements();
}

if (document.readyState !== 'complete') {
    window.addEventListener('load', runAfterLoad);
} else {
    runAfterLoad();
};
