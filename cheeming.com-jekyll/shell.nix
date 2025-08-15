let
  nixpkgs = fetchTarball {
    url = "https://github.com/NixOS/nixpkgs/tarball/nixos-25.05";
    sha256 = "11hcc63hbjiq935ldi9sqp5qri5ss3qli2029jxfrqi2796f1vqy";
  };
  pkgs = import nixpkgs { config = {}; overlays = []; };
in

pkgs.mkShellNoCC {
  packages = with pkgs; [
    ruby_3_2
    libffi
  ];

  LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [
    pkgs.libffi
    pkgs.stdenv.cc.cc.lib
  ];
}

