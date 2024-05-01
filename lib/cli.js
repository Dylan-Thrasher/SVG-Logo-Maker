const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");
const { type } = require("os");

class CLI {
    run() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "text",
                    message: "Please enter up to 3 characters."
                },
                {
                    type: "input",
                    name: "text-color",
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
                    name: "shape-color",
                    message: "Please enter a color or hex value for the color of your shape"
                }
            ])
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

module.exports = CLI;