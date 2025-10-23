.PHONY: help lint dev install

help: ## Display this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

deploy: ## Déploie une nouvelle version
	bun run build
	rsync -avH ./dist/ jonathan-boyer:~/sites/probo.jonathan-boyer.fr/
