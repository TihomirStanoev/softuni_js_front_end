document.addEventListener('DOMContentLoaded', solve);

function solve() {
    function createSection(sectionText) {
    const content = document.getElementById('content');
    const sectionDiv = document.createElement('div');
    const sectionP = Object.assign(
        document.createElement('p'), {
            hidden: true,
            textContent: sectionText,
        });

    sectionDiv.addEventListener('click', (e) => {
        sectionP.hidden = false;
    });

    sectionDiv.appendChild(sectionP);
    content.appendChild(sectionDiv);
}
    const form = document.getElementById('task-input');
    const input = form.querySelector('input[type="text"]');

   form.addEventListener('submit', (e)=>{
       e.preventDefault();
       const inputArr = input.value.split(', ');
       for (const sectionName of inputArr) {
           createSection(sectionName);
       }
   });
}