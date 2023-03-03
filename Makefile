install:
	npm i -g yo
	npm i

link:
	npm uninstall --global generator-prueba && \
	npm unlink generator-prueba && \
	npm link
