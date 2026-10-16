# Saathi: multilingual AI help desk

User apna data (text, CSV, JSON) "My Data" tab mein dalta hai aur kisi bhi bhasha mein sawaal poochta hai. AI sirf us data se jawab deta hai. Pakka jawab na ho to naam aur phone leke ticket staff ko bhejta hai.

## Local chalana
1. `npm i -g vercel`
2. `cp .env.example .env.local` aur `GEMINI_API_KEY` bharo
3. `vercel dev` chalao, http://localhost:3000 kholo

## Deploy
GitHub par push karo, vercel.com par repo import karo, wahi variables Project Settings > Environment Variables mein dalo.

## Key kabhi commit mat karo. `.env*` files `.gitignore` mein hain.

## Files
- `index.html`: poora interface (chat, My Data tab, voice)
- `api/chat.js`: Gemini ya Claude ko data aur sakht niyam ke saath call karta hai
- `api/handoff.js`: ticket banata hai, `WEBHOOK_URL` par staff ko bhejta hai

## Git push
```
git init
git add .
git commit -m "Saathi"
git branch -M main
git remote add origin https://github.com/USERNAME/saathi.git
git push -u origin main
```
Push se pehle `git status` mein check karo ki `.env.local` list mein nahi hai.

## Agle kadam
Executive ka jawab screen par wapas dikhana (tickets Supabase mein), keypad phone ke liye SMS/IVR, user login.
