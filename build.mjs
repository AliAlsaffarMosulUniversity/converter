import {build} from 'esbuild';
import {mkdir,copyFile,cp} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
await Promise.all(['index.html','style.css'].map(f=>copyFile('src/'+f,'dist/'+f)));
await build({entryPoints:['app-source.js'],bundle:true,format:'esm',platform:'browser',outfile:'dist/app.js',minify:true});
await copyFile('node_modules/pdfjs-dist/build/pdf.worker.min.mjs','dist/pdf.worker.min.mjs');
await Promise.all(['cmaps','standard_fonts'].map(d=>cp('node_modules/pdfjs-dist/'+d,'dist/'+d,{recursive:true})));
console.log('Built I LOVE IRAQ into dist/');
