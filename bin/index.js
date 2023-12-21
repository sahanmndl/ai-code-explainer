#!/usr/bin/env node

import OpenAI from 'openai';
import fs from 'fs';
import boxen from 'boxen';
import {Command} from 'commander';
import chalk from "chalk";
import dotenv from 'dotenv';

dotenv.config()

const openai = new OpenAI() //API Key set as system variable
const program = new Command()

program
    .option('-f, --file <path>', 'Filepath of code to be explained')
    .parse(process.argv)

async function main() {
    try {
        const filePath = program._optionValues.file

        if (!fs.existsSync(filePath)) {
            console.error(`Error: File '${filePath}' does not exist`)
            process.exit(1)
        }

        const code = fs.readFileSync(filePath, 'utf-8')

        if (code.trim() === "") {
            console.error(`Error: File '${filePath}' is empty`)
            process.exit(1)
        }

        console.log(chalk.cyan("Processing..."))

        const messages = [
            {
                role: 'system',
                content: 'Explain the following code with full details.'
            },
            {role: 'user', content: code},
        ]

        const completion = await openai.chat.completions.create({
            messages,
            model: 'gpt-3.5-turbo',
        })

        console.log(boxen(completion.choices[0].message.content, {
            padding: 2,
            margin: 2,
            borderStyle: 'round',
            title: 'Code Explanation',
            titleAlignment: 'center'
        }))
    } catch (error) {
        console.error('Error reading or explaining code:', error.message)
        process.exit(1)
    }
}

main()
    .then(() => console.log(chalk.green("Query executed successfully!")))
    .catch(() => console.error(chalk.red("Query execution failed!")))
