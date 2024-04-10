import './box.scss';

const Box = (className = '') => {
    const box = document.createElement('div');
    box.className = `box ${className}`;

    return box;
};

export default Box;