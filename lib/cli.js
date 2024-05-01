const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const fs = require("fs");

class CLI {
    run() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "text",
                    message: "Please enter up to 3 characters.",
                    validate: function (input) {
                        if (input.length <= 3) {
                            return true;
                        } else {
                            return 'Please enter up to 3 characters'
                        }
                    }
                },
                {
                    type: "input",
                    name: "textColor",
                    message: "Please enter a color or hex value for the color of your text"
                },
                {
                    type: "list",
                    name: "shape",
                    message: "Please select the shape you would like:",
                    choices: ["Circle", "Triangle", "Square"]
                },
                {
                    type: "input",
                    name: "shapeColor",
                    message: "Please enter a color or hex value for the color of your shape"
                }
            ])
            .then((response) => {
                let shapeAnswer = response.shape;
                switch (shapeAnswer) {
                    case "Circle":
                        shapeAnswer = new Circle();
                        break;

                    case "Triangle":
                        shapeAnswer = new Triangle();
                        break;

                    default:
                        shapeAnswer = new Square();
                        break;
                }
                shapeAnswer.setColor(response.shapeColor)
                const createdLogo = new SVG()
                createdLogo.setShapeElement(shapeAnswer)
                createdLogo.setTextElement(response.text, response.textColor)

                fs.writeFile('logo.svg', createdLogo.render(), (err) => {
                    err ? console.error(err) : console.log('Generated svg')
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

module.exports = CLI;