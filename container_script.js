/* container_script.js
   Prompts for dimensions of a container and calculates:
   - Volume
   - Surface Area
   - Total Edge Length
   - Weight of water at 90°C
   Author: Cam'ron Manning
   CSC Concentration: Information Systems
*/

// Prompt for dimensions in centimeters
const width = parseFloat(prompt("Enter width (cm):"));
const height = parseFloat(prompt("Enter height (cm):"));
const depth = parseFloat(prompt("Enter depth (cm):"));

// Volume in cm³
const volume = width * height * depth;

// Surface Area (2wh + 2wd + 2hd)
const surfaceArea = 2 * (width * height + width * depth + height * depth);

// Total length of edges = 4(w + h + d)
const edgeLength = 4 * (width + height + depth);

// Water weight: 1 cm³ of water ≈ 1 g at 90°C
const weightWater = volume * 1; // 1 g/cm³

// Format all values to 2 decimals
const format = (value, unit) => `${value.toFixed(2)} ${unit}`;

// Build output table
const output = `
  <table>
    <tr><th>Property</th><th>Value</th></tr>
    <tr><td>Width</td><td>${format(width, "cm")}</td></tr>
    <tr><td>Height</td><td>${format(height, "cm")}</td></tr>
    <tr><td>Depth</td><td>${format(depth, "cm")}</td></tr>
    <tr><td>Volume</td><td>${format(volume, "cm³")}</td></tr>
    <tr><td>Surface Area</td><td>${format(surfaceArea, "cm²")}</td></tr>
    <tr><td>Total Edge Length</td><td>${format(edgeLength, "cm")}</td></tr>
    <tr><td>Weight of Water @ 90°C</td><td>${format(weightWater, "g")}</td></tr>
  </table>
`;

document.getElementById("output").innerHTML = output;
