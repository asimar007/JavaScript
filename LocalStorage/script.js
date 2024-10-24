const uname = document.getElementById('username');
const btn = document.getElementById('clickbtn');
const inuname = document.getElementById('input-username');

btn.addEventListener('click', () => {
    const iname = inuname.value;
    localStorage.setItem('name', iname);
    location.reload();
})

window.addEventListener('load', () => {
    const value = localStorage.getItem('name');
    uname.innerText = value;
})