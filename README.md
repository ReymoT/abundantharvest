# Abundant Harvest Aquaponics Chatbot
AquaGuide is an **interactive AI-driven platform** where users provide inputs through the interface, and the system processes these inputs to generate educational outputs. The platform is designed to support aquaponics learning through personalized and engaging experiences for three main user groups: students, educators, and parents. Each user type is provided with tailored tools and resources to enhance learning, teaching, and accessibility. 


## Installation
1. Clone the repository using `git clone`
2. Navigate into the project folder with `cd repo-name`
3. Install dependencies using `npm install`
4. Run the program locally using `npm run dev`
5. Open http://localhost:3000 with your browser to see the result.

## Technical Documentation
This version uses Google Gemini API 2.5 flash lite. This project was developed using Next.js, TypeScript, and Tailwind CSS and deployed using Vercel.

For further documentation, refer to the Deployment document. 

## User Guide
User selects which category they fall into among the three categories: student, parent, or teacher. 

Students are able to ask the aquaguide chatbot questions about aquaponics. When they are done learning, they can test themselves on the content using the provided quiz or card match memory game.

Educators are able to ask the chatbot for help with teaching their students about aquaponics. They also have an AI lesson plan generator, plus a teaching resources hub with resources for each grade level (elementary, middle, high school)

Parents are able to use the chatbot to ask questions about how to help facilitate learning about aquaponics at home.