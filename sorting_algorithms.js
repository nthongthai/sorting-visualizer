import { drawArray } from './visualizer.js';

export async function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
            drawArray();
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        arr[j + 1] = key;
        drawArray();
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}

export async function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
        drawArray();
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}

export async function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                drawArray();
                await new Promise(resolve => setTimeout(resolve, 100));
            }
        }
    }
}

export async function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    await mergeSort(left);
    await mergeSort(right);

    let i = 0, j = 0, k = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            arr[k++] = left[i++];
        } else {
            arr[k++] = right[j++];
        }
        drawArray();
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    while (i < left.length) {
        arr[k++] = left[i++];
        drawArray();
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    while (j < right.length) {
        arr[k++] = right[j++];
        drawArray();
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}

export async function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return;

    const pivotIndex = await partition(arr, left, right);
    await quickSort(arr, left, pivotIndex - 1);
    await quickSort(arr, pivotIndex + 1, right);
}

async function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            drawArray();
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }

    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    drawArray();
    await new Promise(resolve => setTimeout(resolve, 100));

    return i + 1;
}

export async function countingSort(arr) {
    const max = Math.max(...arr);
    const count = new Array(max + 1).fill(0);

    // Count occurrences
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }

    // Rebuild sorted array
    let index = 0;
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            arr[index++] = i;
            count[i]--;
            drawArray();
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }
}
