// Izarra Villareal CS 81 JavaScript Module 6 Assignment 6B: Personal Assistant

// Defining a constructor function for the Personal Assistant
function PersonalAssistant(name) {
    this.name = name; // Referencing the this keyword to set the name property
    this.tasks = []; // Creating an empty array to hold tasks
    this.mood = null; // Initial mood property set to null
}

// Method to add a task to the assistant's task list
PersonalAssistant.prototype.addTask = function(task) {
    this.tasks.push(task); // Adding the task to the tasks array using push
    console.log(`${this.name} added task: ${task}`); // Logging the added task to the console
}

// Method to complete the next task in the list
PersonalAssistant.prototype.completeTask = function() {
    if (this.tasks.length === 0) { // Checking if there are no tasks to complete
        console.log(`${this.name} has no tasks to complete.`);
        return;
    }
    // I would like to expand this function to allow for specific task completion in the future using index tracking and editing tasks as well as deleting specific tasks from the list
    const completedTask = this.tasks.shift(); // Removing the first task from the tasks array using shift and storing it in a variable called completedTask
    console.log(`${this.name} completed task: ${completedTask}`); // Logging the completed task variable to the console
}

// Method to report the assistant's current mood
PersonalAssistant.prototype.reportMood = function() {
    const moods = ['happy', 'sad', 'excited', 'tired', 'bored', 'motivated']; // Array of possible moods
    this.mood = moods[Math.floor(Math.random() * moods.length)]; // Randomly selecting a mood from the moods array and assigning it to the mood property using Math.random and Math.floor to generate a random index within the bounds of the array length
    console.log(`${this.name} is feeling ${this.mood}`); // Logging the assistant's name and current mood to the console
}

// Example usage:
const assistant = new PersonalAssistant('Chad'); // Introducing my assistant as "Chad"
// Adding at least 3 tasks for the assistant to manage
assistant.addTask('Finish CS 81 homework');
assistant.addTask('Go get groceries at Aldi');
assistant.addTask('Call your bestie Martin');
assistant.addTask('Clean the kitchen');
assistant.addTask('Read learn Mexican Spanish book');
// Reporting the assistant's mood before and after completing tasks
assistant.reportMood();
assistant.completeTask();
assistant.reportMood();
assistant.completeTask();
assistant.reportMood();

// Tested PersonalAssistant successfully using node.js in a Windows PowerShell terminal