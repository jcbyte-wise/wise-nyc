// WiSE NYC Workshop
//
// The event filter buttons are currently displayed,
// but the filtering functionality has not been implemented.
//
// During the workshop, use an AI coding assistant
// to add this functionality.

const filterButtons = document.querySelectorAll('.filters button');
const eventCards = document.querySelectorAll('.event-card');

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const selectedCategory = button.dataset.category;

        filterButtons.forEach((btn) => {
            btn.classList.toggle('active', btn === button);
        });

        eventCards.forEach((card) => {
            const matchesCategory =
                selectedCategory === 'All' ||
                card.dataset.category === selectedCategory;

            card.classList.toggle('hidden', !matchesCategory);
        });
    });
});