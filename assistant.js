// Izarra Villareal CS 81 JavaScript Module 6 Assignment 6B: Personal Assistant

function PersonalAssistant(name) {
    this.name = name;
    this.tasks = [];
    this.mood = null;
}

PersonalAssistant.prototype.addTask = function(task) {
    this.tasks.push(task);
    console.log(`${this.name} added task: ${task}`);
}

PersonalAssistant.prototype.completeTask = function() {
    if (this.tasks.length === 0) {
        console.log(`${this.name} has no tasks to complete.`);
        return;
    }
    const completedTask = this.tasks.shift();
    console.log(`${this.name} completed task: ${completedTask}`);
}

PersonalAssistant.prototype.reportMood = function() {
    const moods = ['happy', 'sad', 'excited', 'tired', 'bored', 'motivated'];
    this.mood = moods[Math.floor(Math.random() * moods.length)];
    console.log(`${this.name} is feeling ${this.mood}`);
}

// Example usage:
const assistant = new PersonalAssistant('Izarra');
assistant.addTask('Finish homework');
assistant.addTask('Go grocery shopping');
assistant.addTask('Call mom');
assistant.addTask('Clean room');
assistant.addTask('Read a book');
assistant.reportMood();
assistant.completeTask();
assistant.reportMood();
assistant.completeTask();
assistant.completeTask();
assistant.reportMood();
assistant.completeTask();
assistant.completeTask();
assistant.completeTask(); // Attempting to complete a task when none are left
assistant.reportMood();
