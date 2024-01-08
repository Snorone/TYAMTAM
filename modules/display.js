function displayMovie(){
    const movieInfoDiv = document.createElement('div');
    createAndAppendElement('img','Test Test', movieInfoDiv);

    document.body.append(movieInfoDiv);
}

function createAndAppendElement(type, content, container){
    const element = document.createElement(type);
    container.append(element);

    if(type === 'img') element.src = content;
    else element.innerText = content;
    return element;
}

export{displayMovie};