async function lockedProfile() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    const main = document.getElementById('main');
    main.innerHTML = ''; // Изчистваме всичко

    const response = await fetch(url);
    const data = await response.json();

    Object.values(data).forEach((profile, index) => {
        const profileDiv = document.createElement('div');
        profileDiv.className = 'profile';

        const id = index + 1; // user1Username, user1Email и т.н.

        profileDiv.innerHTML = `
            <img src="./iconProfile2.png" class="userIcon" />
            <label>Lock</label>
            <input type="radio" name="user${id}Locked" value="lock" checked>
            <label>Unlock</label>
            <input type="radio" name="user${id}Locked" value="unlock"><br>
            <hr>
            <label>Username</label>
            <input type="text" name="user${id}Username" value="${profile.username}" disabled readonly />
            <div class="hiddenInfo" style="display: none;">
                <hr>
                <label>Email:</label>
                <input type="email" name="user${id}Email" value="${profile.email}" disabled readonly />
                <label>Age:</label>
                <input type="number" name="user${id}Age" value="${profile.age}" disabled readonly />
            </div>
            <button>Show more</button>
        `;

        const button = profileDiv.querySelector('button');
        const hiddenDiv = profileDiv.querySelector('.hiddenInfo');
        const unlockRadio = profileDiv.querySelector(`input[value="unlock"]`);

        button.addEventListener('click', () => {
            if (unlockRadio.checked) {
                const isVisible = hiddenDiv.style.display === 'block';
                hiddenDiv.style.display = isVisible ? 'none' : 'block';
                button.textContent = isVisible ? 'Show more' : 'Hide it';
            }
        });

        main.appendChild(profileDiv);
    });
}
