let arrayOfUsers;
let arrayofUSUsers;
let arrayofAUUsers;
let arrayofFRUsers;
let arrayofGBUsers

window.onload = function() {
    getUsers();
    getUSUsers();
    getAUUsers();
    getFRUsers();
    getGBUsers();
};


//Fetch Five Random Users
const getUsers = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(users => arrayOfUsers = users)
        setTimeout(function() {
            console.log(arrayOfUsers)
        }, 1000)
};

//Fetch Five AU Users
const getAUUsers = () => {
    fetch('https://randomuser.me/api/?nat=au&results=5')
        .then(response => response.json())
        .then(users => arrayofAUUsers = users)
        setTimeout(function() {
            console.log(arrayofAUUsers)
        }, 1000)
};

//Fetch Five US Users
const getUSUsers = () => {
    fetch('https://randomuser.me/api/?nat=us&results=5')
        .then(response => response.json())
        .then(users => arrayofUSUsers = users)
        setTimeout(function() {
            console.log(arrayofUSUsers)
        }, 1000)
};

//Fetch Five FR Users
const getFRUsers = () => {
    fetch('https://randomuser.me/api/?nat=fr&results=5')
        .then(response => response.json())
        .then(users => arrayofFRUsers = users)
        setTimeout(function() {
            console.log(arrayofFRUsers)
        }, 1000)
};

//Fetch Five GB Users
const getGBUsers = () => {
    fetch('https://randomuser.me/api/?nat=gb&results=5')
        .then(response => response.json())
        .then(users => arrayofGBUsers = users)
        setTimeout(function() {
            console.log(arrayofGBUsers)
        }, 1000)
};

//Display Five Random Users
const displayUser = () => {
    let allUsers = document.getElementById('address-section');
    allUsers.innerHTML = null;
    arrayOfUsers.results.map((user) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const button = document.createElement('button');
        button.innerHTML = "Show Info"
        const ul = document.createElement('ul');
        const text = document.createTextNode(` ${user.name.first} ${user.name.last} `)
        img.src = user.picture.large
        li.appendChild(img)
        li.appendChild(text)
        li.appendChild(button)
        li.appendChild(ul)
        allUsers.append(li)
        button.addEventListener('click', () => {
            ul.innerHTML = null;
            const clearButton = document.createElement('button');
            clearButton.innerHTML = "Clear Info";
            for (let property in user) {
                if (typeof user[property] === 'object') {
                    // console.log(user[property]);
                    for (let subProperty in user[property]) {
                        // console.log(user[property][subProperty])
                        if (typeof user[property][subProperty] === 'object') {
                            for (let subSubProperty in user[property][subProperty]) {
                                const li = document.createElement('li');
                                const text = document.createTextNode(`${subSubProperty}: ${user[property][subProperty][subSubProperty]}`)
                                li.appendChild(text)
                                ul.appendChild(li)
                            }
                        } else {
                            const li = document.createElement('li');
                            const newText = document.createTextNode(`${subProperty}: ${user[property][subProperty]}`)
                            li.appendChild(newText)
                            ul.appendChild(li)
                        }
                    }
                } else {
                    const li = document.createElement('li');
                    const newText = document.createTextNode(`${property}: ${user[property]}`)
                    li.appendChild(newText)
                    ul.appendChild(li)
                }
            }
            ul.appendChild(clearButton)
            clearButton.addEventListener('click', () => {
                ul.innerHTML = null;
            })
        })
    })
};

//Display Five AU Users
const displayAUUser = () => {
    let allUsers = document.getElementById('address-section');
    allUsers.innerHTML = null;
    arrayofAUUsers.results.map((user) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const button = document.createElement('button');
        button.innerHTML = "Show Info"
        const ul = document.createElement('ul');
        const text = document.createTextNode(` ${user.name.first} ${user.name.last} `)
        img.src = user.picture.large
        li.appendChild(img)
        li.appendChild(text)
        li.appendChild(button)
        li.appendChild(ul)
        allUsers.append(li)
        button.addEventListener('click', () => {
            ul.innerHTML = null;
            const clearButton = document.createElement('button');
            clearButton.innerHTML = "Clear Info";
            for (let property in user) {
                if (typeof user[property] === 'object') {
                    // console.log(user[property]);
                    for (let subProperty in user[property]) {
                        // console.log(user[property][subProperty])
                        if (typeof user[property][subProperty] === 'object') {
                            for (let subSubProperty in user[property][subProperty]) {
                                const li = document.createElement('li');
                                const text = document.createTextNode(`${subSubProperty}: ${user[property][subProperty][subSubProperty]}`)
                                li.appendChild(text)
                                ul.appendChild(li)
                            }
                        } else {
                            const li = document.createElement('li');
                            const newText = document.createTextNode(`${subProperty}: ${user[property][subProperty]}`)
                            li.appendChild(newText)
                            ul.appendChild(li)
                        }
                    }
                } else {
                    const li = document.createElement('li');
                    const newText = document.createTextNode(`${property}: ${user[property]}`)
                    li.appendChild(newText)
                    ul.appendChild(li)
                }
            }
            ul.appendChild(clearButton)
            clearButton.addEventListener('click', () => {
                ul.innerHTML = null;
            })
        })
    })
};



//Display Five US Users
const displayUSUser = () => {
    let allUsers = document.getElementById('address-section');
    allUsers.innerHTML = null;
    arrayofUSUsers.results.map((user) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const button = document.createElement('button');
        button.innerHTML = "Show Info"
        const ul = document.createElement('ul');
        const text = document.createTextNode(` ${user.name.first} ${user.name.last} `)
        img.src = user.picture.large
        li.appendChild(img)
        li.appendChild(text)
        li.appendChild(button)
        li.appendChild(ul)
        allUsers.append(li)
        button.addEventListener('click', () => {
            ul.innerHTML = null;
            const clearButton = document.createElement('button');
            clearButton.innerHTML = "Clear Info";
            for (let property in user) {
                if (typeof user[property] === 'object') {
                    // console.log(user[property]);
                    for (let subProperty in user[property]) {
                        // console.log(user[property][subProperty])
                        if (typeof user[property][subProperty] === 'object') {
                            for (let subSubProperty in user[property][subProperty]) {
                                const li = document.createElement('li');
                                const text = document.createTextNode(`${subSubProperty}: ${user[property][subProperty][subSubProperty]}`)
                                li.appendChild(text)
                                ul.appendChild(li)
                            }
                        } else {
                            const li = document.createElement('li');
                            const newText = document.createTextNode(`${subProperty}: ${user[property][subProperty]}`)
                            li.appendChild(newText)
                            ul.appendChild(li)
                        }
                    }
                } else {
                    const li = document.createElement('li');
                    const newText = document.createTextNode(`${property}: ${user[property]}`)
                    li.appendChild(newText)
                    ul.appendChild(li)
                }
            }
            ul.appendChild(clearButton)
            clearButton.addEventListener('click', () => {
                ul.innerHTML = null;
            })
        })
    })
};


//Display Five FR Users
const displayFRUser = () => {
    let allUsers = document.getElementById('address-section');
    allUsers.innerHTML = null;
    arrayofFRUsers.results.map((user) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const button = document.createElement('button');
        button.innerHTML = "Show Info"
        const ul = document.createElement('ul');
        const text = document.createTextNode(` ${user.name.first} ${user.name.last} `)
        img.src = user.picture.large
        li.appendChild(img)
        li.appendChild(text)
        li.appendChild(button)
        li.appendChild(ul)
        allUsers.append(li)
        button.addEventListener('click', () => {
            ul.innerHTML = null;
            const clearButton = document.createElement('button');
            clearButton.innerHTML = "Clear Info";
            for (let property in user) {
                if (typeof user[property] === 'object') {
                    // console.log(user[property]);
                    for (let subProperty in user[property]) {
                        // console.log(user[property][subProperty])
                        if (typeof user[property][subProperty] === 'object') {
                            for (let subSubProperty in user[property][subProperty]) {
                                const li = document.createElement('li');
                                const text = document.createTextNode(`${subSubProperty}: ${user[property][subProperty][subSubProperty]}`)
                                li.appendChild(text)
                                ul.appendChild(li)
                            }
                        } else {
                            const li = document.createElement('li');
                            const newText = document.createTextNode(`${subProperty}: ${user[property][subProperty]}`)
                            li.appendChild(newText)
                            ul.appendChild(li)
                        }
                    }
                } else {
                    const li = document.createElement('li');
                    const newText = document.createTextNode(`${property}: ${user[property]}`)
                    li.appendChild(newText)
                    ul.appendChild(li)
                }
            }
            ul.appendChild(clearButton)
            clearButton.addEventListener('click', () => {
                ul.innerHTML = null;
            })
        })
    })
};

//Display Five GB Users
const displayGBUser = () => {
    let allUsers = document.getElementById('address-section');
    allUsers.innerHTML = null;
    arrayofGBUsers.results.map((user) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const button = document.createElement('button');
        button.innerHTML = "Show Info"
        const ul = document.createElement('ul');
        const text = document.createTextNode(` ${user.name.first} ${user.name.last} `)
        img.src = user.picture.large
        li.appendChild(img)
        li.appendChild(text)
        li.appendChild(button)
        li.appendChild(ul)
        allUsers.append(li)
        button.addEventListener('click', () => {
            ul.innerHTML = null;
            const clearButton = document.createElement('button');
            clearButton.innerHTML = "Clear Info";
            for (let property in user) {
                if (typeof user[property] === 'object') {
                    // console.log(user[property]);
                    for (let subProperty in user[property]) {
                        // console.log(user[property][subProperty])
                        if (typeof user[property][subProperty] === 'object') {
                            for (let subSubProperty in user[property][subProperty]) {
                                const li = document.createElement('li');
                                const text = document.createTextNode(`${subSubProperty}: ${user[property][subProperty][subSubProperty]}`)
                                li.appendChild(text)
                                ul.appendChild(li)
                            }
                        } else {
                            const li = document.createElement('li');
                            const newText = document.createTextNode(`${subProperty}: ${user[property][subProperty]}`)
                            li.appendChild(newText)
                            ul.appendChild(li)
                        }
                    }
                } else {
                    const li = document.createElement('li');
                    const newText = document.createTextNode(`${property}: ${user[property]}`)
                    li.appendChild(newText)
                    ul.appendChild(li)
                }
            }
            ul.appendChild(clearButton)
            clearButton.addEventListener('click', () => {
                ul.innerHTML = null;
            })
        })
    })
};
