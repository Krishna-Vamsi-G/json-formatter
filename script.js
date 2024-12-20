/* styles.css */

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 1200px; /* Increased width for better side-by-side display */
    margin: 50px auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
}

.editor-container {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
}

.editor {
    flex: 1; /* Equal width for both editors */
    display: flex;
    flex-direction: column;
}

.editor h2 {
    margin-bottom: 10px;
    color: #555;
}

textarea {
    width: 100%;
    height: 300px; /* Increased height for better usability */
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    font-family: monospace;
    font-size: 14px;
    box-sizing: border-box;
}

.buttons {
    text-align: center;
    margin-bottom: 15px;
}

button {
    padding: 10px 20px;
    margin: 5px;
    border: none;
    background-color: #007BFF;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

#message {
    text-align: center;
    font-size: 14px;
    color: #d9534f; /* Red color for errors */
}

/* Responsive Design */
@media (max-width: 800px) {
    .editor-container {
        flex-direction: column;
    }

    textarea {
        height: 250px;
    }
}

@media (max-width: 500px) {
    .container {
        margin: 20px;
    }

    button {
        width: 100%;
        margin: 5px 0;
    }

    textarea {
        height: 200px;
    }
}
