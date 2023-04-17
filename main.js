import { tasks } from "./exercise.js";

function saveState() {
    const state = {
        currentTaskIndex,
        score
    };
    localStorage.setItem("codeBlocksGameState", JSON.stringify(state));
}

function restoreState() {
    const savedStateJSON = localStorage.getItem("codeBlocksGameState");
    if (savedStateJSON) {
        const savedState = JSON.parse(savedStateJSON);
        currentTaskIndex = savedState.currentTaskIndex;
        score = savedState.score;
        updateScoreDisplay();
    }
}

function updateScoreDisplay() {
    const scoreDisplay = document.getElementById("score-display");
    scoreDisplay.textContent = `Wynik: ${score.toFixed(1)}`;
}

function loadTask(index) {
    // Usuń poprzednie bloki kodu z kontenera
    blocksContainer.innerHTML = "";

    const task = tasks[index];
    const taskDescriptionElement = document.getElementById("task-description");
    taskDescriptionElement.textContent = task.description;

    task.blocks.forEach((block) => {
        const blockElement = document.createElement("div");
        blockElement.classList.add("code-block");
        blockElement.textContent = block.content;
        blockElement.setAttribute("draggable", "true");
        blockElement.dataset.id = block.id;

        blockElement.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", blockElement.dataset.id);
        });

        blocksContainer.appendChild(blockElement);
    });
}

const blocksContainer = document.querySelector(".blocks-container");
const dropzone = document.querySelector(".dropzone");
const checkButton = document.getElementById("check-btn");
const nextButton = document.getElementById("next-btn");

let currentTaskIndex = 0;
let score = 0;

restoreState();
loadTask(currentTaskIndex);

checkButton.addEventListener("click", () => {
    const droppedBlocks = Array.from(dropzone.children);
    const expectedBlocks = tasks[currentTaskIndex].blocks;

    if (droppedBlocks.length !== expectedBlocks.length) {
        alert("Liczba bloków jest niepoprawna. Spróbuj ponownie.");
        return;
    }

    let isCorrect = true;

    for (let i = 0; i < droppedBlocks.length; i++) {
        if (droppedBlocks[i].dataset.id !== expectedBlocks[i].id.toString()) {
            isCorrect = false;
            break;
        }
    }

    if (isCorrect) {
        alert("Brawo! Kod jest poprawny.");
        score += 1;
    } else {
        alert("Kod jest niepoprawny. Spróbuj ponownie.");
        score -= 0.5;
        if (score < 0) {
            score = 0;
        }
    }

    updateScoreDisplay();
    saveState(); // Zapisz stan po sprawdzeniu kodu
});

nextButton.addEventListener("click", () => {
    currentTaskIndex++;

    if (currentTaskIndex >= tasks.length) {
        alert("Gratulacje! Ukończyłeś wszystkie zadania.");
        currentTaskIndex = 0;
    }

    dropzone.innerHTML = "";
    loadTask(currentTaskIndex);
    saveState(); // Zapisz stan po przejściu do następnego zadania
});

dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
});

dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    const blockId = e.dataTransfer.getData("text/plain");
    const blockElement = document.querySelector(`[data-id="${blockId}"]`);
    dropzone.appendChild(blockElement);
});



