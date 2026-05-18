const { JSDOM } = require('jsdom');
const fs = require('fs');
const html = fs.readFileSync('rta_exam_combined.html', 'utf8');
const dom = new JSDOM(html, { runScripts: 'dangerously' });
const window = dom.window;
const document = window.document;
try {
    window.nameInput.value = 'Test User';
    window.startExam();
    console.log('Exam started');
    window.processSubmit();
    console.log('Submit processed');
} catch(e) {
    console.error('ERROR:', e.stack);
}
