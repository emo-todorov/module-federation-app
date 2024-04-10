const BoxEl = import('BlueApp/Box')

const links = [
    { title: 'Blue', url: '#blue' },
    { title: 'Green', url: '#green' }
];

const Navigation = () => {
    const navigationEl = document.createElement('div');
    const navLinks = links
        .map(({ title, url }) => {
            return `<a href=${url}>${title}</a>`
        })
        .join(' ');
    navigationEl.innerHTML = navLinks;
    navigationEl.addEventListener('click', (evt) => {
        const url = evt.target.href;

        const className = (url === 'http://localhost:8080/#blue') ? 'box--blue' : 'box--green';

        BoxEl.then(BlueAppModule => {
            const BoxEl = BlueAppModule.default;

            document.body.append(BoxEl(className));
        })
    })

    return navigationEl;
};

export default Navigation;