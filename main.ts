class WordCounter {
    text: string;

    constructor(text: string) {
        this.text = text;
    }

    // Function to count total words
    countTotalWords(): number {
        return this.text.split(/\s+/).filter(word => word.trim() !== '').length;
    }

    // Function to count unique words
    countUniqueWords(): number {
        const words = this.text.toLowerCase().split(/\s+/).filter(word => word.trim() !== '');
        const uniqueWords = new Set(words);
        return uniqueWords.size;
    }

    // Function to count word occurrences
    countWordOccurrences(word: string): number {
        const regex = new RegExp('\\b' + word + '\\b', 'gi');
        const matches = this.text.match(regex);
        return matches ? matches.length : 0;
    }

    // Function to find most common word
    findMostCommonWord(): string {
        const words = this.text.toLowerCase().match(/\b\w+\b/g);
        if (!words) return "No words found";
        const wordMap: { [key: string]: number } = {};
        words.forEach(word => {
            if (wordMap[word]) {
                wordMap[word]++;
            } else {
                wordMap[word] = 1;
            }
        });
        const sortedWords = Object.entries(wordMap).sort((a, b) => b[1] - a[1]);
        return sortedWords.length > 0 ? sortedWords[0][0] : "No words found";
    }

    // Function to display word frequency
    displayWordFrequency(): void {
        const words = this.text.toLowerCase().match(/\b\w+\b/g);
        if (!words) {
            console.log("No words found");
            return;
        }
        const wordMap: { [key: string]: number } = {};
        words.forEach(word => {
            if (wordMap[word]) {
                wordMap[word]++;
            } else {
                wordMap[word] = 1;
            }
        });
        console.log("Word Frequency:");
        Object.entries(wordMap).forEach(([word, frequency]) => {
            console.log(`${word}: ${frequency}`);
        });
    }
}

// Example usage
const text = "This is a sample text. It contains words. This text will be used for testing word counter functionality.";
const wordCounter = new WordCounter(text);
console.log("Total words:", wordCounter.countTotalWords());
console.log("Unique words:", wordCounter.countUniqueWords());
console.log("Occurrences of 'text':", wordCounter.countWordOccurrences('text'));
console.log("Most common word:", wordCounter.findMostCommonWord());
wordCounter.displayWordFrequency();
