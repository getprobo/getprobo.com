NPM ?= npm
NPX ?= npx

.PHONY: build
build:
	$(NPM) run build

.PHONY: fmt
fmt:
	$(NPX) prettier --write .

.PHONY: lint
lint:
	$(NPX) prettier --check .

.PHONY: dev
dev:
	$(NPM) run dev

.PHONY: clean
clean:
	rm -rf node_modules
	rm -rf .next
	rm -rf out