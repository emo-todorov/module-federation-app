import('BlueApp/Box')
    .then(BlueAppModule => {
        const Box = BlueAppModule.default;

        document.body.append(Box('box--green'));
    })

    