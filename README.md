# Array to Zigzag String Converter

A simple React.js project that converts an array of comma-separated strings into a zigzag merged string.
Even-indexed words are kept as-is, while odd-indexed words are reversed — finally merged into a single string.

Features

* Takes comma-separated input (like one,two,three,four).

* Zigzag conversion logic:

    *Even index → keep original.

    *Odd index → reverse the string.

* Clean UI with input box and a “Merge” button.

* Edge cases handled (empty input, spaces, special characters, numbers).

* Tested with Jest to ensure correctness.