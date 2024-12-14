# Agent Management System

## Project Overview

This project is an Agent Management System built with Next.js and Shadcn/ui components. It provides a user interface for managing agents, including features to create new agents, delete existing agents, and change their status.

## Features

- List all agents with their ID, name, and status
- Create new agents
- Delete existing agents
- Change agent status (Active/Inactive)
- Search functionality to filter agents
- Responsive design with dark/light mode toggle

## Technologies Used

- Next.js 13+ (App Router)
- React 18+
- TypeScript
- Tailwind CSS
- Shadcn/ui components
- next-themes for theme management

## Problems Faced During Development

1. **Component Library Constraints**: We were limited to using only Shadcn/ui components, which sometimes required creative solutions to implement certain features.

2. **State Management**: Managing the state of agents across components without a global state management solution required careful prop drilling and state lifting.

3. **Theme Implementation**: Implementing a theme toggle that works with Next.js server-side rendering required the use of next-themes and careful component structuring.

4. **TypeScript Integration**: Ensuring proper typing for all components and functions, especially with the Shadcn/ui components, required attention to detail.

5. **Responsive Design**: Creating a responsive design that works well on all screen sizes while adhering to the Shadcn/ui component structure was challenging.

## Running the Project Locally

Follow these steps to run the project on your local machine:

1. **Clone the repository**

   \`\`\`bash
   git clone <repository-url>
   cd agent-management-system
   \`\`\`

2. **Install dependencies**

   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**

   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open the application**

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- \`app/\`: Contains the main pages and layout components
- \`components/\`: Reusable React components
- \`lib/\`: Utility functions and shared logic
- \`public/\`: Static assets

## Potential Issues and Solutions

1. **Node.js Version**: Ensure you are using Node.js version 14.x or higher.

2. **Dependency Conflicts**: If you encounter any dependency conflicts, try deleting the \`node_modules\` folder and \`package-lock.json\` file, then run \`npm install\` again.

3. **Styling Issues**: If styles are not applying correctly, make sure Tailwind CSS is properly configured in your project.

4. **TypeScript Errors**: If you encounter TypeScript errors, ensure you have the latest type definitions for all dependencies.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

# Agent-Management
