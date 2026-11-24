document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const profileDiv = document.querySelectorAll('.profile');


    for (const profile of profileDiv) {
        const profileButton = profile.querySelector('button');
        const radio = profile.querySelector('.radio-group input');
        const profileDetails = profile.querySelector('.hidden-fields');

        profileButton.addEventListener('click', (e) => {
            if (!radio.checked) {
                profileDetails.classList.toggle('active');
            }
        });
    }
}