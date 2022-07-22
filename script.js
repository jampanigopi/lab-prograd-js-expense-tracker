var master = JSON.parse(localStorage.getItem('master'));

if (master == null) {
    obj = {
        Text: [],
        Amount: []
    };
    localStorage.setItem('master', JSON.stringify(obj));
    master = JSON.parse(localStorage.getItem('master'));
} else {
    let t = master['Text'];
    let a = master['Amount'];
    let str = '';

    for (let i = 0; i < t.length; i++) {
        const ele1 = t[i];
        const ele2 = a[i];
        console.log(ele1, ele2);
        str += `
                    <li>${ele1} <span>${ele2}</span></li>

        `;
    }
    document.getElementById('list').innerHTML += str;
}

const handle = () => {
    let text = document.getElementById('text').value;
    let amt = document.getElementById('amount').value;

    master['Text'].push(text);
    master['Amount'].push(amt);


    localStorage.setItem('master', JSON.stringify(master));
    document.getElementById('text').value = '';
    document.getElementById('amount').value = '';
    console.log(master);
    document.getElementById('list').innerHTML += `
                    <li>${text} <span>${amt}</span></li>

        `;
};
