const {Circle, Square, Triangle} = require("./shapes")

// testing for Circle
describe('Circle', () => {
    it('renders requested shape and color', () => {
        const shape = new Circle();
        var color = 'green';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>`);
    });
});

// testing for Square
describe('Square', () => {
    it('renders requested shape and color', () => {
        const shape = new Square();
        var color = 'red';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}"/>`);
    });
});

// testing for Triangle
describe('Triangle', () => {
    it('renders requested shape and color', () => {
        const shape = new Triangle();
        var color = 'blue';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0, 200 300, 200 150, 0" fill="${color}"/>`);
    });
});