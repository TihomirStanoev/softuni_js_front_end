function toggle() {
    const btnAccordion = document.querySelector('#accordion .button');
    const isHidden = btnAccordion.textContent === 'More';
    btnAccordion.textContent = isHidden ? 'Less' : 'More';
    document.querySelector('#extra').style.display = isHidden ? 'block' : 'none';
}