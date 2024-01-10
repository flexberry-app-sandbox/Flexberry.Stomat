docker build --no-cache -f SQL\Dockerfile.PostgreSql -t stomat/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t stomat/app ../..
