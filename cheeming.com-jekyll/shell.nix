let
  nixpkgs = fetchTarball "https://github.com/NixOS/nixpkgs/tarball/nixos-25.05";
  pkgs = import nixpkgs { config = {}; overlays = []; };
in

/*
let
  pnpm10_12_1 = pkgs.pnpm.overrideAttrs (oldAttrs: rec {
      version = "10.12.1";
      src = pkgs.fetchFromGitHub {
          owner = "pnpm";
          repo = "pnpm";
          rev = "aeb7bc0c3cf8ab55a3d5524d8abde7f1f3370128";
          hash = "";
      };
  });
in
*/

pkgs.mkShellNoCC {
  LD_LIBRARY_PATH="/nix/store/90c412b9wqhfny300rg5s2gpsbrqb31q-libffi-3.4.8/lib:/nix/store/7c0v0kbrrdc2cqgisi78jdqxn73n3401-gcc-14.2.1.20250322-lib/lib";

  packages = with pkgs; [
    ruby_3_2
    libffi

  ];
}

