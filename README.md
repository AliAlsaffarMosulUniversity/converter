# I LOVE IRAQ

Arabic document conversion studio. Browser-local PDF, DOCX, PPTX and image tools.

## Build

```sh
npm ci
npm run build
npx serve dist
```

The application includes 12 conversion, merge, compression and page tools. PDF to Word extracts text without reconstructing layout; PDF to PowerPoint creates image slides. Scanned PDFs require OCR, which is not included. Word to PDF reflows and rasterizes content. Safe compression preserves searchable text but does not guarantee a reduction.

Live application: https://i-love-iraq-docs.nutmegwhale34.chatgpt.site
