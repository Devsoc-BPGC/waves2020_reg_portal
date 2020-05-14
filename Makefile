APP_NAME=waves2020_reg_portal
# Figure out a way to put all of this in package.json

run:
	docker-compose up

install-server:
	docker-compose -f docker-compose.builder.yml run --rm install-packages-server

install-client:
	docker-compose -f docker-compose.builder.yml run --rm install-packages-client

push:
	git add --all
	git commit
	git push -u origin master
	
pull:
	git pull -v origin master

update:
	make pull
	make restart

pm2-start:
	pm2 start --name $(APP_NAME) bin/www

stop:
	pm2 stop $(APP_NAME)

restart:
	pm2 restart $(APP_NAME)

logs:
	pm2 logs $(APP_NAME)

# Database.
db-connect:
	docker exec -it waves_mongo_reg_portal_container mongo

# Builds
docker-build:
	npm run build:docker

# Deployments
deploy:
	npm run deploy

deploy-appengine:
	npm run deploy:appengine

