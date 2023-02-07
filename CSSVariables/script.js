function setTheme(){
    const root=document.documentElement;
    const newTheme= root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
    document.querySelector('.text').textContent=`Theme is: ${newTheme}`;
}
document.querySelector('.setThemebtn').addEventListener('click', setTheme)