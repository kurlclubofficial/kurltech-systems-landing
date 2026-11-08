// Ambient declaration for stylesheet imports.
// Next.js does not ship one, so side-effect imports like
// `import "./globals.css"` are otherwise unresolvable to TypeScript.
declare module "*.css";
