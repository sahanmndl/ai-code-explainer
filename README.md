# AI Code Explainer CLI

A Node.js CLI tool that leverages OpenAI's GPT-3.5 Turbo to provide detailed explanations for code snippets.

## Description

This command-line interface allows you to submit a file containing code and receive an explanation of the code's functionality in English. The tool utilizes OpenAI's powerful language model to generate clear and concise explanations.

## Features

- Explain code from a specified file
- Display the explanation in a well-formatted box in the terminal

## Prerequisites

- Node.js installed on your machine
- OpenAI API key

## Installation

1. Clone the repository:

```bash
git clone https://github.com/sahanmndl/ai-code-explainer.git
cd ai-code-explainer
```

2. Install dependencies:

```bash
npm install
```

3. Setup OpenAI API Key:

To setup the API Key on your machine, please follow the instructions present on their [official website](https://platform.openai.com/docs/quickstart?context=node). For Windows, add the API Key under Environment Variables.

Or, you can also just pass the API Key in the line,
```bash
const openai = new OpenAI({ apiKey: "YOUR_API_KEY" })
```

## Usage

Navigate to the root directory of the project and then run:

```bash
npm install -g .
```

Then, run the CLI app with the following command:

```bash
code-explainer -f <YOUR_CODE_FILE_PATH>
```

For example,

```bash
code-explainer -f "C:\Users\Sahan Mondal\ReactNativeProjects\PaySplit\src\components\list-items\TransactionMemberItem.tsx"
OR
code-explainer -f "C:\Users\Sahan Mondal\DSA Practice\Graphs\E. Topological Sorting\BFS(Kahn's_Algo).cpp"
```

If you make any changes in the code, always run `npm install -g .` first, and then `code-explainer -f <YOUR_CODE_FILE_PATH>`.

## Demo

https://github.com/sahanmndl/ai-code-explainer/assets/76529959/edc1d146-0f8b-463e-a84c-1b837f0bccb4




