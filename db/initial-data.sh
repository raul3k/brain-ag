DB_EXISITS=$(docker exec agrobrain-db psql -U postgres -tc "SELECT 1 FROM pg_database WHERE datname = 'agro'" | grep 1)

if [ -z "$DB_EXISITS" ]
then
  docker exec agrobrain-db psql -U postgres -tc "CREATE DATABASE agro"
else
  echo "EXISTE"
fi

docker exec -i agrobrain-db psql -U postgres -d agro < ./db/initial.sql