let comments = [];

const checkSpam = (str) => {

    let lowerStr = str.toLowerCase();

    if (lowerStr.includes('viagra')||lowerStr.includes('xxx'))

    {
        let newstr = str.replace(/viagra|xxx/ig, "***");
        return newstr;
    }   
        else
        { 
            return str;
        }
}






function generate() {

    let block = "";
    for (let c of comments) {
        block += `<div>${c}</div><hr>`;

    }
    document.getElementById('container-comment').innerHTML = block;

}

function newComment() {
    let newcomment = document.getElementById('newcomment').value;
    if (newcomment == 0) {
        return;
    }
    newcomment = checkSpam(newcomment);
    comments.push(newcomment);

    generate();
    document.getElementById("newcomment").value = "";
};






document.getElementById('btn').addEventListener("click", newComment);