#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"

usage() {
  cat <<EOF
Usage: ${0##*/} <install|update|remove> [args]

Available commands:
  install   Run the dedicated submodule install script.
  update    Run the dedicated submodule update script.
  remove    Run the dedicated submodule removal script.

Examples:
  ${0##*/} install
  ${0##*/} update
  ${0##*/} remove --yes
EOF
}

command_name="${1:-}"

case "$command_name" in
  install)
	shift
	exec bash "$SCRIPT_DIR/git-submodule-install.sh" "$@"
	;;
  update)
	shift
	exec bash "$SCRIPT_DIR/git-submodule-update.sh" "$@"
	;;
  remove)
	shift
	exec bash "$SCRIPT_DIR/git-submodule-remove.sh" "$@"
	;;
  -h|--help|"")
	usage
	;;
  *)
	echo "Unknown command: $command_name" >&2
	usage >&2
	exit 1
	;;
esac
