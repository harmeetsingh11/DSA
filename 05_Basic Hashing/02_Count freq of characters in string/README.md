<h2><a href="">2. Count Frequency of Characters in a String</a></h2>
<img src="https://img.shields.io/badge/Easy-brightgreen" alt="Easy" />
<hr>
<div>
    You are given a string.

Your task is to count the frequency of each `character` in the string and return a `result` where each `character` is paired with its frequency (do not include whitespaces).

Ensure that the characters in the result are in the same order as their appearance in the input string. Solve using both `Map` and plain `objects` in JavaScript.
    <p><strong class="example">Example1:</strong></p>
    <pre>
        <strong>Input:</strong> "hello"
        <strong>Output:</strong>
        {h => 1, e => 1, l => 2, o => 1} (if using Map)
        {h: 1, e: 1, l: 2, o: 1} (if using object)
        <strong>Explanation: </strong><br>The character 'h' appears 1 time in the input string.
The character 'e' appears 1 time in the input string.
The character 'l' appears 2 times in the input string.
The character 'o' appears 1 time in the input string.
    </pre>
    <p><strong class="example">Example2:</strong></p>
    <pre>
        <strong>Input:</strong> "programming world"
        <strong>Output:</strong>
{ 'p' => 1,'r' => 3,'o' => 2,'g' => 2,'a' => 1,'m' => 2,'i' => 1,  'n' => 1,  'w' => 1,  'l' => 1,  'd' => 1} (if using Map)

{ p: 1, r: 3, o: 2, g: 2, a: 1, m: 2, i: 1, n: 1, w: 1, l: 1, d: 1 } (if using object)

<strong>Explanation: </strong><br>The character 'p' appears 1 time in the input string.
The character 'r' appears 3 times in the input string.
The character 'o' appears 2 times in the input string.
The character 'g' appears 2 times in the input string.
The character 'a' appears 1 time in the input string.
The character 'm' appears 2 times in the input string.
The character 'i' appears 1 time in the input string.
The character 'n' appears 1 time in the input string.
The character 'w' appears 1 time in the input string.
The character 'l' appears 1 time in the input string.
The character 'd' appears 1 time in the input string.
    </pre>
    
</div>
