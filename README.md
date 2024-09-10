# Development 
Steps to run the app in development mode

1. Get the DB Running
```
docker compose up -d
```
2. Create a copy of .env.tempalte and rename it to .env
3. Replace the env variables
4. Execute ``` npm install ``` and ```npm run dev ```
5. Execute these prisma commands to setup the database:
```
npx prisma migrate dev
npx prisma generate
```
6. Execute the SEED to [create the local database](localhost:3000/api/seed)
```
localhost:3000/api/seed
```

## Prisma Commands
```
npx prisma init
npx prisma migrate dev (dev is the name of the migration)
npx prisma generate
```


