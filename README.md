## Recoded From Jaksel-Language by Rio Chandra

This project recoded from jaksel-language!.

---

# sunda Script

sunda Script is a new programming language, very modern, easy to learn, using Indonesia-slang language. No programming experience required.

Thank you for all your contributions, share, star, and everything.

## Instalation & Run

Install from npm

```bash
npm install -g sunda-language
```

Or Clone this repository

```bash
git clone https://github.com/aldiipratama/sunda-language.git
```

### Run

If you install from npm, run sunda script using `sunda` command

```bash
sunda example/example1.sunda
```

Or run from this repository

```
node sunda-interpreter.js example/example1.sunda
```

## Table Of Content

- [sunda Script](#sunda-script)
  - [Instalation &amp; Run](#instalation--run)
  - [Table Of Content](#table-of-content)
  - [Example](#example)
  - [Command](#command)
  - [Disclaimer](#disclaimer)
  - [Showcase](#showcase)
    - [Highlight Text Editor](#highlight-text-editor)

[github-markdown-toc](https://github.com/ekalinin/github-markdown-toc)

## Example

Example :

```
mastikeun umur teh 21
tingalikeun "Umur maneh " + umur
lamun umur leuwih gede ti 20
  tingalikeun "maneh kolot"
  mastikeun umurUrang teh umur + 10
  tingalikeun "lamun urang umurna " + umurUrang
  lamun umurUrang leuwih gede ti 30
    tingalikeun "urang leuwih kolot"
  geusan
lamun henteu
  tingalikeun "dasar bolon"
geusan
tingalikeun "geusan ah"
```

```
mastikeun jumlah teh 10
tingalikeun "Jumlah: " + jumlah

nu mana jumlah teh 11
tingalikeun "Jumlah: " + jumlah

mastikeun hirup teh pantes
tingalikeun "hirup :" + hirup

ti i nepi 10
  lamun i leuwih gede ti 3
    tingalikeun "loop ka " + i
  geusan
geusan
```

### Command

Some command just like javascript, the only different is keyword and this language will translate to javascript and run as javascript. I know, this is just for fun.

- [List Command](Command.md)

### Disclaimer

This project just for fun, I don't want to hurt anyone. Just from idea "what if sunda language is a programming language" and make it true. This project only for education purpose, not for production ready.

## Showcase

Some cool project from you, submit your project like highlight text, sunda-to-js, etc. Make PR link to your repo !. Don't limit your creativity
