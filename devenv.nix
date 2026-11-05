{ pkgs, config, ... }:
{

  languages.javascript = {
    enable = true;
    npm.enable = true;
    package = pkgs.nodejs_26;
  };
  packages = [ ];

  enterShell = "";
}
