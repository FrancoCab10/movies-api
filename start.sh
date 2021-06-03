#! /bin/sh
if [ ${FIRST_RUN} -eq 1 ]
then
  cd /home/node/app/api/database
  npx sequelize-cli db:create movies-db
  npx sequelize-cli db:migrate
  npx sequelize-cli db:seed:all
  cd /home/node/app
fi
yarn start