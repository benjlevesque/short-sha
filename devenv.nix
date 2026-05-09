{ pkgs, config, ... }:
{

  languages.javascript = {
    enable = true;
    npm.enable = true;
  };
  packages = [ ];

  enterShell = "";
}
