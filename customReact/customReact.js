function customRender(reactElement, main) {
    const domElm = document.createElement(reactElement.type);
    domElm.innerHTML = reactElement.children;
    for (let k in reactElement.props) {
        domElm.setAttribute(k, reactElement.props[k]);
    };

    main.appendChild(domElm);

};

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click Me!'
}


const main = document.querySelector('#root');

customRender(reactElement, main);

