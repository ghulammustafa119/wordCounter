#! /usr/bin/env node
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "enter a sentence"
    }
]);
let words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`word count ${words.length}`);
