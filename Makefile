.PHONY: help format check i18n

help: ## Display this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

format: ## Format files
	npm run format

check: ## Check documentation integrity
	npm run check:docs

i18n: ## Build i18n jsons
	node tools/i18n.ts
