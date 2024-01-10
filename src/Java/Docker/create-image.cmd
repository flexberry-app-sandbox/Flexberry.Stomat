docker build --no-cache -f SQL\Dockerfile.PostgreSql -t stomat-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t stomat-java/app ../../..
