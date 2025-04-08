function tokenize_markdown(md) {
    const lines = md.split('\n');
    let ast = [];
    let current_paragraph = [];
    
    const flush_paragraph = () => {
        if (current_paragraph.length > 0) {
            text = current_paragraph.join(' ')

            ast.push({ type: '_paragraph', content: inlineText(text) });
            current_paragraph = [];
        }
    };
    
    const inlineText = (txt) => txt.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
     .replace(/`(.*?)`/g, '<code>$1</code>')
     .replace(/_(.*?)_/g, '<em>$1</em>')
     .replace(/\$\[(.*?)\]/g, '<i class="action">$1</i>');

    
    lines.forEach(line => {
        console.log(line);
        if (/^#+ /.test(line)) {
            flush_paragraph();
            let level = line.match(/^#+/)[0].length;
            ast.push({ type: 'heading', level, content: line.replace(/^#+ /, '') });
        } else if (/^!\[.*\]\(.*\)$/.test(line)) {
            flush_paragraph();
            let match = line.match(/^!\[(.*)\]\((.*)\)$/);
            ast.push({ type: 'image', alt: match[1], src: match[2] });
        } else if (/^\[.*\]\(.*\)$/.test(line)) {
            flush_paragraph();
            let match = line.match(/^\[(.*)\]\((.*)\)$/);
            ast.push({ type: 'link', text: match[1], href: match[2] });
        } else if (line === '---') {
            flush_paragraph();
            ast.push({ type: 'hr' });
        } else if (/^>\s+.+$/.test(line)) {
            flush_paragraph();
            ast.push({ type: 'blockquote', content: inlineText(line.replace(/^\d+\.\s+/, '')) });
        } else if (/^\d+\.\s+.+$/.test(line)) {
            flush_paragraph();
            ast.push({ type: 'ordered_list', content: inlineText(line.replace(/^\d+\.\s+/, '')) });
        } else if (/^-\s+.+$/.test(line)) {
            flush_paragraph();
            ast.push({ type: 'unordered_list', content: inlineText(line.replace(/^-\s+/, '')) });
        } else if (line.trim() === '') {
            flush_paragraph();
        } else {
            current_paragraph.push(line);
        }
    });
    
    flush_paragraph();
    return ast;
}

// Exemple d'utilisation
const markdownText = `# Titre princi_pal
## Sous-titre

Texte en **gras** et _italique_, rendez-vous au $[LINK,11].

> **Note**: Texte en **gras** et _italique_.

- Élément de liste
- Élément de liste

1. Élément numéroté
1. Élément numéroté
1. Élément numéroté

![Alt text](image.jpg)

[Google](https://google.com)

---

- Si vous souhaitez utiliser \`NEEDLE\`, rendez-vous au $[LINK,11]
- Si vous souhaitez utiliser \`WATER\`, rendez-vous au $[LINK,20]
- Si vous souhaitez utiliser \`PRIMERSEARCH\`, rendez-vous au $[LINK,25]

`;

console.log(JSON.stringify(tokenize_markdown(markdownText), null, 2));

