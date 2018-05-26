#!/bin/bash
# Prints prettier output in a pretty manner

RED='\033[0;31m'
NC='\033[0m' # No Color

function run() {
  echo Checking code formatting

  local files="$(npm run prettier --silent -- --list-different)"

  if [ -n "$files" ]; then
    echo
    echo -e "${RED}The following files are not formatted correctly${NC}"
    echo $files
    exit 1
  else
    echo OK!
  fi
}

run
