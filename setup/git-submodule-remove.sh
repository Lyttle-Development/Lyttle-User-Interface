#!/usr/bin/env bash

set -euo pipefail

SUBMODULE_PATH="${SUBMODULE_PATH:-packages/design-framework}"
AUTO_CONFIRM=false

usage() {
  cat <<EOF
Usage: ${0##*/} [--yes] [--help]

Removes the design framework submodule from the repository.

Options:
  --yes   Skip the removal confirmation prompt.

Environment overrides:
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

while [[ $# -gt 0 ]]; do
  case "$1" in
    --yes)
      AUTO_CONFIRM=true
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      usage >&2
      exit 1
      ;;
  esac
done

ensure_git_repo

if ! is_registered_submodule; then
  echo "No submodule is configured at '$SUBMODULE_PATH'." >&2
  exit 1
fi

if [[ "$AUTO_CONFIRM" != true ]]; then
  read -r -p "Remove submodule at '$SUBMODULE_PATH'? [y/N] " reply
  case "$reply" in
    [Yy]|[Yy][Ee][Ss]) ;;
    *)
      echo "Aborted."
      exit 1
      ;;
  esac
fi

git submodule deinit -f -- "$SUBMODULE_PATH" || true
git rm -f -- "$SUBMODULE_PATH"
rm -rf ".git/modules/$SUBMODULE_PATH"

cat <<EOF
Submodule at '$SUBMODULE_PATH' has been removed.

Suggested next steps:
  git commit -m "chore: remove design submodule ($SUBMODULE_PATH)"
EOF

