import { insertionSort, selectionSort, bubbleSort, mergeSort, quickSort, countingSort } from './sorting_algorithms.js';

const visualizer = document.getElementById("visualizer");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const algorithmSelect = document.getElementById("algorithmSelect");
let array = [];

// Constants
const containerHeight = visualizer.clientHeight;
const containerWidth = visualizer.clientWidth

// Initialize array
function initArray(size = 10) {
    array = Array.from({ length: size }, () => Math.floor(Math.random() * 100));
    console.log("Initialized array:", array);
    drawArray();
}

// Exported drawArray function
export function drawArray() {
    visualizer.innerHTML = ""; // Clear previous bars
    array.forEach(value => {
        const bar = document.createElement("div");
        bar.style.height = `${value * 3}px`;
        bar.classList.add("bar");
        visualizer.appendChild(bar);
    });
}

// Start sorting based on selected algorithm
async function startSorting() {
    const selectedAlgorithm = algorithmSelect.value;
    if (selectedAlgorithm === "insertionSort") {
        await insertionSort(array);
    }
    else if (selectedAlgorithm === "selectionSort") {
        await selectionSort(array);
    }
    else if (selectedAlgorithm === "bubbleSort") {
        await bubbleSort(array);
    }
    else if (selectedAlgorithm === "mergeSort") {
        await mergeSort(array);
    }
    else if (selectedAlgorithm === "quickSort") {
        await quickSort(array);
    }
    else if (selectedAlgorithm === "countingSort") {
        await countingSort(array);
    }
}

// Reset the visualizer
function resetVisualizer() {
    initArray();
}

// Event listeners
startBtn.addEventListener("click", startSorting);
resetBtn.addEventListener("click", resetVisualizer);

// Initialize the array on page load
initArray();