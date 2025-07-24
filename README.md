# Lambda Template for Git

A starter template for deploying AWS Lambda functions using Node.js, TypeScript, and GitHub Actions. This project is designed for rapid development, testing, and deployment of serverless APIs, with built-in MongoDB connectivity and environment variable support.

## Features

- **AWS Lambda Ready:** Easily deployable via AWS SAM and GitHub Actions.
- **TypeScript:** Strict typing for safer, modern JavaScript development.
- **MongoDB Integration:** Simple connection management for serverless environments.
- **Environment Variables:** Uses `.env` for local development.
- **CI/CD:** Automated build and deployment workflow via GitHub Actions.
- **Fast Build:** Uses `esbuild` for quick bundling.

## Getting Started

### Prerequisites

- Node.js 20+
- AWS CLI & SAM CLI
- MongoDB URI (for database access)

### Installation

```sh
git clone https://github.com/yourusername/lambda-template-for-git.git
cd lambda-template-for-git
npm install
```

### Configuration

Create a `.env` file in the root of the project and add your MongoDB connection string:

```env
MONGODB_URI=your-mongodb-connection-string
```

### Build

To build the project, run:

```sh
npm run build
npm run sam-local
```

Contributions welcome! Fork, star, and submit PRs to improve this template.
