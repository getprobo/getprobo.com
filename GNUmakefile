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

.PHONY: compress-blog-images
compress-blog-images: compress-webp compress-png
	@echo "All blog images compressed successfully!"

.PHONY: compress-webp
compress-webp:
	@echo "Compressing WebP images..."
	@for file in public/blog/*.webp; do \
		if [ -f "$$file" ]; then \
			echo "Processing $$file..."; \
			temp_file="$${file}.tmp.webp"; \
			cwebp -q 80 -m 6 "$$file" -o "$$temp_file" 2>/dev/null; \
			if [ -f "$$temp_file" ]; then \
				original_size=$$(stat -f%z "$$file" 2>/dev/null || stat -c%s "$$file" 2>/dev/null); \
				new_size=$$(stat -f%z "$$temp_file" 2>/dev/null || stat -c%s "$$temp_file" 2>/dev/null); \
				if [ $$new_size -lt $$original_size ]; then \
					saved=$$((original_size - new_size)); \
					percent=$$((saved * 100 / original_size)); \
					mv "$$temp_file" "$$file"; \
					echo "  ✓ Reduced by $${percent}% ($${saved} bytes)"; \
				else \
					rm "$$temp_file"; \
					echo "  ✓ Already optimized"; \
				fi; \
			fi; \
		fi; \
	done
	@echo "WebP compression complete!"

.PHONY: compress-png
compress-png:
	@echo "Compressing PNG images..."
	@for file in public/blog/*.png; do \
		if [ -f "$$file" ]; then \
			echo "Processing $$file..."; \
			original_size=$$(stat -f%z "$$file" 2>/dev/null || stat -c%s "$$file" 2>/dev/null); \
			pngquant --quality=65-80 --speed 1 --force --ext .png "$$file" 2>/dev/null; \
			new_size=$$(stat -f%z "$$file" 2>/dev/null || stat -c%s "$$file" 2>/dev/null); \
			saved=$$((original_size - new_size)); \
			percent=$$((saved * 100 / original_size)); \
			echo "  ✓ Reduced by $${percent}% ($${saved} bytes)"; \
		fi; \
	done
	@echo "PNG compression complete!"
