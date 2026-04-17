let
  nixpkgs = fetchTarball {
    url = "https://github.com/NixOS/nixpkgs/tarball/nixos-25.05";
    sha256 = "0v6bd1xk8a2aal83karlvc853x44dg1n4nk08jg3dajqyy0s98np";
  };
  pkgs = import nixpkgs { config = {}; overlays = []; };
in

pkgs.mkShellNoCC {
  packages = with pkgs; [
    ruby_3_2
    llvmPackages_18.clang
    llvmPackages_18.libcxx
    libffi
    pkg-config
    openssl
  ];

  LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [
    pkgs.libffi
    pkgs.stdenv.cc.cc.lib
  ];

  OPENSSL_DIR = "${pkgs.openssl.dev}";
  OPENSSL_LIB_DIR = "${pkgs.openssl.out}/lib";
  OPENSSL_INCLUDE_DIR = "${pkgs.openssl.dev}/include";
}

