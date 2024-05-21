document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-input');
    const characters = document.querySelectorAll('.character');

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.trim().toLowerCase();

        characters.forEach(character => {
            const characterName = character.getAttribute('data-name').toLowerCase();
            if (characterName.includes(searchTerm)) {
                character.style.display = 'block';
            } else {
                character.style.display = 'none';
            }
        });
    });
});
