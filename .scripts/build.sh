#!/bin/bash

set -e

# ANSI color codes
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color
# Get the current version from package.json
VERSION=$(node -p "require('./package.json').version")
PATCHTYPE=$2

update_version() {
    local version_type=$1
    local updated_version

    case "$version_type" in
        "patch")
            updated_version=$(npm version patch)
            ;;
        "minor")
            updated_version=$(npm version minor)
            ;;
        "major")
            updated_version=$(npm version major)
            ;;
        *)
            echo "Invalid version type. Please use 'patch', 'minor', or 'major'. Supplied: $version_type"
            exit 1
            ;;
    esac

    echo $updated_version
}

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

completed() {
    echo -e "${GREEN}$1${NC}"
}

run_section() {
    if [ "$interactive" == "true" ]; then
        read -p "Do you want to run this section? (y/n): " choice
        if [ "$choice" == "n" ]; then
            echo "Skipping this section."
            return
        fi
    fi

    eval "$1"
    completed "$2 completed."
}

# Main Script
interactive="true"

for arg in "$@"; do
    case "$arg" in
        --non-interactive)
            interactive="false"
            ;;
    esac
done

header "Starting Laravel Vue EasyForms Build - $VERSION"

tasks=("Running Tests" "Linting" "Prettifying" "Building Vite" "Building Types" "Building Story" "Additional Files" "Publish to NPM" "Deploy to GitHub" "Update Version - $PATCHTYPE")
commands=("npm run test:run" "npm run lint" "npm run format" "npm run build:vite" "npm run build:types" "npm run build:story" "touch ./docs/.nojekyll" "npm publish" "git add . && git commit -m 'update: $VERSION' && git push" "update_version $PATCHTYPE")

for ((i=0; i<${#tasks[@]}; i++)); do
    task "$((i+1))/${#tasks[@]} ${tasks[i]}...."
    run_section "${commands[i]}" "${tasks[i]}"
done

completed "Build completed."
