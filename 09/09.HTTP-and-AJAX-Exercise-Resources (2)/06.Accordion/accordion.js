window.addEventListener('DOMContentLoaded', loadArticles);

async function loadArticles() {
    const main = document.getElementById('main');

    const listUrl = 'http://localhost:3030/jsonstore/advanced/articles/list';

    try {
        const res = await fetch(listUrl);
        const data = await res.json();

        for (const article of data) {
            const accordion = document.createElement('div');
            accordion.className = 'accordion';

            // Създаваме HTML структурата
            accordion.innerHTML = `
                <div class="head">
                    <span>${article.title}</span>
                    <button class="button" id="${article._id}">More</button>
                </div>
                <div class="extra" style="display: none;">
                    <p></p>
                </div>
            `;

            const button = accordion.querySelector('button');
            const extra = accordion.querySelector('.extra');
            const paragraph = accordion.querySelector('p');

            button.addEventListener('click', async () => {
                if (button.textContent === 'More') {
                    const detailsUrl = `http://localhost:3030/jsonstore/advanced/articles/details/${article._id}`;

                    try {
                        const detailsRes = await fetch(detailsUrl);
                        const detailsData = await detailsRes.json();

                        paragraph.textContent = detailsData.content;
                        extra.style.display = 'block';
                        button.textContent = 'Less';
                    } catch (err) {
                        console.error('Error fetching details:', err);
                    }
                } else {
                    extra.style.display = 'none';
                    button.textContent = 'More';
                }
            });

            main.appendChild(accordion);
        }
    } catch (err) {
        console.error('Error fetching list:', err);
    }
}
