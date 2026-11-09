import { readFileSync, writeFileSync } from "fs";

//constant for loop limit that iterates over the files
const FILES_COUNT = 10;

//constant to store the DIRECOTY of the output.txt file
const OUTPUT_FILE = "output.txt";


//function that reads 10 files and return the output in output.txt
function mergeFiles(output) {
  //array to store the lines
  //that we write out to a file output.txt
  const result = [];

  //loop to iterate over the filse a1-a1
  for (let i = 1; i <= FILES_COUNT; i++) {
    const content = readFileSync(`a${i}.txt`, "utf8");
    const lines = content.split(/\r?\n/).filter((line) => line !== "");

    // push lines as strings to result Array
    //  every folder number equals current iteration int i value
    result.push(...lines.slice(0, i));
  }

  writeFileSync(output, result.join("\n") + "\n", "utf8");
  console.log(`Wrote ${result.length} lines to ${output}`);
}

mergeFiles(OUTPUT_FILE);
