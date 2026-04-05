#!/usr/bin/env bash

set -euo pipefail

SUBMODULE_PATH="${SUBMODULE_PATH:-packages/design-framework}"

usage() {
  cat <<EOF
Usage: ${0##*/} [--help]

Initializes the design framework submodule if needed and updates it to the
latest commit on its configured remote branch.

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

if ! is_registered_submodule; then
  echo "No submodule is configured at '$SUBMODULE_PATH'. Run the install script first." >&2
  exit 1
fi

git submodule update --init --recursive "$SUBMODULE_PATH"
git submodule update --remote --merge "$SUBMODULE_PATH"

cat <<EOF
Submodule at '$SUBMODULE_PATH' has been updated.

Suggested next steps:
  git add "$SUBMODULE_PATH"
  git commit -m "chore: update design submodule ($SUBMODULE_PATH)"
EOF

