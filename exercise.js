export const tasks = [
    {
        id: 1,
        description: "Zadanie 1: Dodanie nowego elementu <div> do strony.",
        blocks: [
            { id: 1, content: "const newDiv = document.createElement('div');" },
            { id: 2, content: "newDiv.textContent = 'Nowy element';" },
            { id: 3, content: "document.body.appendChild(newDiv);" }
        ]
    },
    {
        id: 2,
        description: "Zadanie 2: Usunięcie elementu <ul> ze strony.",
        blocks: [
            { id: 1, content: "const ulElement = document.querySelector('ul');" },
            { id: 2, content: "ulElement.parentNode.removeChild(ulElement);" }
        ]
    },
    {
        id: 3,
        description: "Zadanie 3: Zmiana tła elementu <body> po kliknięciu na przycisk.",
        blocks: [
            { id: 1, content: "const button = document.querySelector('button');" },
            { id: 2, content: "button.addEventListener('click', () => {" },
            { id: 3, content: "  document.body.style.backgroundColor = 'blue';" },
            { id: 4, content: "});" }
        ]
    },
    {
        id: 4,
        description: "Zadanie 4: Dodanie klasy 'active' do elementu <li> po najechaniu na niego myszką.",
        blocks: [
            { id: 1, content: "const liElements = document.querySelectorAll('li');" },
            { id: 2, content: "liElements.forEach((li) => {" },
            { id: 3, content: "  li.addEventListener('mouseover', () => {" },
            { id: 4, content: "    li.classList.add('active');" },
            { id: 5, content: "  });" },
            { id: 6, content: "});" }
        ]
    },
    {
        id: 5,
        description: "Zadanie 5: Zmiana koloru tekstu w elemencie <p> po wpisaniu tekstu w polu input.",
        blocks: [
            { id: 1, content: "const input = document.querySelector('input');" },
            { id: 2, content: "const pElement = document.querySelector('p');" },
            { id: 3, content: "input.addEventListener('input', () => {" },
            { id: 4, content: "  const color = input.value;" },
            { id: 5, content: "  pElement.style.color = color;" },
            { id: 6, content: "});" }
        ]
    }
];
