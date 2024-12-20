// script.js

document.addEventListener('DOMContentLoaded', () => {
    const jsonInput = document.getElementById('jsonInput');
    const jsonOutput = document.getElementById('jsonOutput');
    const formatBtn = document.getElementById('formatBtn');
    const validateBtn = document.getElementById('validateBtn');
    const clearBtn = document.getElementById('clearBtn');
    const copyBtn = document.getElementById('copyBtn');
    const message = document.getElementById('message');

    // Function to display messages
    const showMessage = (msg, isError) => {
        message.textContent = msg;
        message.style.color = isError ? '#d9534f' : '#28a745'; // Red for errors, green for success
        setTimeout(() => {
            message.textContent = '';
        }, 3000);
    };

    // Function to format JSON
    const formatJSON = () => {
        const input = jsonInput.value.trim();
        if (!input) {
            showMessage('Input is empty!', true);
            return;
        }
        try {
            const parsed = JSON.parse(input);
            const formatted = JSON.stringify(parsed, null, 4);
            jsonOutput.value = formatted;
            showMessage('JSON formatted successfully!', false);
        } catch (error) {
            showMessage(`Error: ${error.message}`, true);
        }
    };

    // Function to validate JSON
    const validateJSON = () => {
        const input = jsonInput.value.trim();
        if (!input) {
            showMessage('Input is empty!', true);
            return;
        }
        try {
            JSON.parse(input);
            showMessage('Valid JSON!', false);
        } catch (error) {
            showMessage(`Invalid JSON: ${error.message}`, true);
        }
    };

    // Function to clear input and output
    const clearFields = () => {
        jsonInput.value = '';
        jsonOutput.value = '';
        message.textContent = '';
    };

    // Function to copy output to clipboard
    const copyToClipboard = () => {
        const output = jsonOutput.value;
        if (!output) {
            showMessage('Nothing to copy!', true);
            return;
        }
        navigator.clipboard.writeText(output).then(() => {
            showMessage('Copied to clipboard!', false);
        }).catch(() => {
            showMessage('Failed to copy!', true);
        });
    };

    // Event Listeners
    formatBtn.addEventListener('click', formatJSON);
    validateBtn.addEventListener('click', validateJSON);
    clearBtn.addEventListener('click', clearFields);
    copyBtn.addEventListener('click', copyToClipboard);
});
