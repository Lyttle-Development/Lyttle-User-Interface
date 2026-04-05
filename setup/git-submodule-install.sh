#!/usr/bin/env bash

set -euo pipefail

SUBMODULE_URL="${SUBMODULE_URL:-https://github.com/Lyttle-Development/LyttleFramework.git}"
SUBMODULE_PATH="${SUBMODULE_PATH:-packages/design-framework}"

usage() {
  cat <<EOF
Usage: ${0##*/} [--help]

Adds the design framework submodule and initializes it.

Environment overrides:
  SUBMODULE_URL   Repository URL to add as a submodule.
  SUBMODULE_PATH  Target path for the submodule.
EOF
}

ensure_git_repo() {
  if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    echo "This script must be run inside a git repository." >&2
    exit 1
  fi
}

is_registered_submodule() {
  git config -f .gitmodules --get-regexp '^submodule\..*\.path$' 2>/dev/null \
    | awk '{print $2}' \
    | grep -Fxq "$SUBMODULE_PATH"
}

case "${1:-}" in
  "" ) ;;
  -h|--help)
    usage
    exit 0
    ;;
  *)
    usage >&2
    exit 1
    ;;
esac

ensure_git_repo

if is_registered_submodule; then
  echo "Submodule already exists at '$SUBMODULE_PATH'. Initializing/updating it instead..."
  git submodule update --init --recursive "$SUBMODULE_PATH"
else
  if [[ -e "$SUBMODULE_PATH" ]]; then
    echo "Cannot add submodule because '$SUBMODULE_PATH' already exists." >&2
    exit 1
  fi

  git submodule add "$SUBMODULE_URL" "$SUBMODULE_PATH"
  git submodule update --init --recursive "$SUBMODULE_PATH"
fi

cat <<EOF
Submodule is ready at '$SUBMODULE_PATH'.

Suggested next steps:
  git add .gitmodules "$SUBMODULE_PATH"
  git commit -m "chore: add LyttleFramework design library as git submodule ($SUBMODULE_PATH)"
EOF

