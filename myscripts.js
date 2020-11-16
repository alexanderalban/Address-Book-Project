let arrayOfUsers;

window.onload = function() {
    getUsers()
};

const getUsers = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(users => arrayOfUsers = users)
        setTimeout(function() {
            console.log(arrayOfUsers)
        }, 1000)
        // .then(console.log(arrayOfUsers))
};

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
        //Reveal Other Info Button
        // button.addEventListener('click', () => {
        //     ul.innerHTML = null;
        //     const clearButton = document.createElement('button');
        //     clearButton.innerHTML = "Clear Info";
        //     const li1 = document.createElement('li');
        //     const userGender = document.createTextNode(`Gender: ${user.gender}`);
        //     li1.appendChild(userGender);
        //     ul.appendChild(li1);
        //     li.appendChild(clearButton);
        //     clearButton.addEventListener('click', () => {
        //         ul.innerHTML = null;
        //     })
        // })
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