#!/usr/bin/env bash
set -euo pipefail

export DOTNET_CLI_TELEMETRY_OPTOUT=1
export DOTNET_NOLOGO=1

DOTNET_DIR="/usr/local/dotnet"

if [ ! -x "$DOTNET_DIR/dotnet" ] || ! "$DOTNET_DIR/dotnet" --list-sdks | grep -q '^8\.'; then
  curl -fsSL https://dot.net/v1/dotnet-install.sh -o /tmp/dotnet-install.sh
  sudo mkdir -p "$DOTNET_DIR"
  sudo bash /tmp/dotnet-install.sh --channel 8.0 --install-dir "$DOTNET_DIR"
fi

sudo ln -sf "$DOTNET_DIR/dotnet" /usr/local/bin/dotnet

dotnet restore GoxBit/GoxBit.csproj
