#!/bin/bash

# ANSI color codes
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

header() {
    echo -e "${YELLOW}"
    cat << "EOF"
:::    :::     ::: :::::::::: ::::::::::
:+:    :+:     :+: :+:        :+:
+:+    +:+     +:+ +:+        +:+
+#+    +#+     +:+ +#++:++#   :#::+::#
+#+     +#+   +#+  +#+        +#+
#+#      #+#+#+#   #+#        #+#
########## ###     ########## ###
EOF
    echo -e "${NC}"
    echo -e "${YELLOW}$1${NC}"
}

task() {
    echo -e "${BLUE}----------------------------------------------${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}----------------------------------------------${NC}"
}

clear() {
    echo "Removing node_modules and package-lock.json."
    rimraf node_modules package-lock.json
    completed "Complete."
    install
}

cleanInstall() {
    task "Running clean install."
    clear
}

install() {
    task "Running new install."
    npm install
    completed "Complete."
}

completed() {
    echo -e "${GREEN}$1${NC}"
}


# Main Script
clean="false"

# Parse command-line arguments
for arg in "$@"; do
    case "$arg" in
        --clean)
            clean="true"
            ;;
    esac
done

header "Starting Laravel Vue EasyForms Install"

task "Checking current setup".
# Check if rimraf is installed and Node Modules folder exists
if [ "$clean" == "true" ]; then
  echo "Force clean flag detected."
  cleanInstall
elif [ -d "node_modules" ] && npm list -g rimraf > /dev/null 2>&1; then
    echo "Rimraf and Node Modules folder detected."
    read -p "Do you want to run a clean install (y/n): " choice
    if [ "$choice" == "y" ]; then
        cleanInstall
    else
        install
    fi
else
    echo "Rimraf or Node Modules folder is not detected."
    install
fi

completed "Install completed."
