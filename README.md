# 🎶 GrooveGrid

## Create music
### Produce music by placing notes on the grid
![GrooveGrid](/public/images/GrooveGrid.png)
### Change the instrument to be played, select from 14 different alternatives
![instruments](/public/images/instruments.png)
### Adjust the pitch and volume of individual instruments
![pitch and volume](/public/images/pitchandvolume.png)
### Publish your masterpiece
![publish](/public/images/publish.png)
### Listen to your and others work on the feed
![feed](/public/images/feed.png)
### View your stats and update your description on your profile
![profile](/public/images/profile.png)

## Try it yourself
Install dependencies:
Install dependencies:

```bash
npm install
```

Create e `.env` file and fill it out as per `.env.example`:

```bash
cp .env.example .env
```

Create database tables from Prisma schema:

```bash
npm run db:push
```

Start the development server:

```bash
npm run dev
```
