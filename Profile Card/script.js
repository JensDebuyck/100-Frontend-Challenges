import { annotate } from 'https://unpkg.com/rough-notation?module';


document.getElementById("follow").onclick = () => {
    
    window.alert("You followed Johnny Rogers");
    
}

document.getElementById("message").onclick = () => {
    const e = document.querySelector('span');
    const annotation = annotate(e, { type: 'underline' });
    annotation.show();
    window.alert("Message sent to Johnny Rogers");
}

