# About Project
This project is for Paroki Kosambi Baru Profile Website. Current active deployment can be accessed by following URL: [Paroki Kosambi Baru](https://parokikosambibaru.or.id/). These are pages of the website, the symbol `~` means it under development and requires extra attention.
- [v] `/`
- [v] `/visi-misi`
- [v] `/sejarah`
- [\~] `/profil-pastor`
- [\~] `/susunan-pengurus`
- [v] `/jadwal-misa`
- [v] `/jadwal-kegiatan`
- [v] `/jadwal-layanan`
- [\~] `/petugas-liturgi`
- [\~] `/berita`
- [\~] `/galeri`

## Getting Started
The project is built with [NextJS](https://nextjs.org/docs) and [TailwindCSS](https://tailwindcss.com/docs/installation/using-vite). Follow these installation steps to start development.

1. Clone the project. It is recommended to use SSH.
```bash
git clone git@github.com:Komsos-Matias-Rasul/webpage-samara.git parokikosambi-web
```
But you can use following command to install over HTTPS
```bash
# install using HTTPS:
git clone https://github.com/Komsos-Matias-Rasul/webpage-samara.git parokikosambi-web
```

2. Installing dependencies

It is recommended to use `pnpm` to install the dependencies.
```bash
pnpm install
```
Or you might use another package manager such as:
```bash
# using default npm
npm install
# using yarn
yarn install
# using bun
bun install
```
Wait until the installation is complete. It will automatically create new `node_modules/` folder in the project.
3. Create environment variables file
```bash
touch .env
```
Then, add the following variables into the file. Values of each variable will be given.
```bash
PG_USER=
PG_HOST=
PG_DATABASE=
PG_PASSWORD=
PG_PORT=
PG_SSL=

GCLOUD_PROJECT=
GCLOUD_BUCKET=
GOOGLE_CREDENTIALS_BASE64=
```
4. Start the server. If you are using `pnpm`, use the following command.
```bash
pnpm dev
```
Or you might use one of these:
```bash
# using default npm
npm run dev
# using yarn
yarn dev
# using bun
bun dev 
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder structure
From the root folder, you have two folders, `public/` and `src/`
- `public/` contains static assets such as images, icons
- `src/` contains codebase of the web

Inside `src/`, there are 5 more folders:
- `actions/` contains server actions. (will be removed soon).
- `app/` contains pages and api of the web. Note that this will be the folder you work with the most.
- `components/` contains reusable components of the web.
- `data/` contains static JSON data for web content.
- `lib/` contains helper functions which are being used in the project.

Last, inside `app/` folder there are so many folders which we use as pages. We are using [NextJS App Router](https://nextjs.org/docs/app/getting-started/layouts-and-pages). Folders with file `page.jsx` inside it are pages which can be accessed by their corresponding folder name. There is `api/` folder which contains api to access data from database. This API will be deleted soon.
