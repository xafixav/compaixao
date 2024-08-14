#!/bin/bash

# Define the output file
output_file="project_structure.txt"

# Generate the directory structure, excluding node_modules
find . -type d \( -name "node_modules" -prune \) -o -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g' > $output_file

echo "Project structure has been saved to $output_file"