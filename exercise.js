export const tasks = [
    {
        id: 1,
        description: "Co to jest DOM?",
        blocks: [
            { id: 1, content: "DOM (Document Object Model) to struktura drzewiasta,", dataIndent: 0 },
            { id: 2, content: "która reprezentuje strukturę dokumentu HTML lub XML.", dataIndent: 0 },
            { id: 3, content: "Jest to interfejs programistyczny,", dataIndent: 0 },
            { id: 4, content: "który umożliwia dostęp do elementów strony internetowej", dataIndent: 0 },
            { id: 5, content: "i umożliwia ich modyfikację poprzez manipulowanie ich atrybutami i treścią.", dataIndent: 0 }
        ]
    },
    {
        id: 2,
        description: "Zadanie 2: Usunięcie elementu <ul> ze strony.",
        blocks: [
            { id: 1, content: "const ulElement = document.querySelector('ul');", dataIndent: 0 },
            { id: 2, content: "ulElement.parentNode.removeChild(ulElement);", dataIndent: 0 },
        ],
    },
    {
        id: 3,
        description: "Zadanie 3: Zmiana tła elementu <body> po kliknięciu na przycisk.",
        blocks: [
            { id: 1, content: "const button = document.querySelector('button');", dataIndent: 0 },
            { id: 2, content: "button.addEventListener('click', () => {", dataIndent: 0 },
            { id: 3, content: "document.body.style.backgroundColor = 'blue';", dataIndent: 2 },
            { id: 4, content: "});", dataIndent: 0 },
        ],
    },
    {
        id: 4,
        description: "Zadanie 4: Dodanie klasy 'active' do elementu <li> po najechaniu na niego myszką.",
        blocks: [
            { id: 1, content: "const liElements = document.querySelectorAll('li');", dataIndent: 0 },
            { id: 2, content: "liElements.forEach((li) => {", dataIndent: 0 },
            { id: 3, content: "li.addEventListener('mouseover', () => {", dataIndent: 2 },
            { id: 4, content: "li.classList.add('active');", dataIndent: 4 },
            { id: 5, content: "});", dataIndent: 2 },
            { id: 6, content: "});", dataIndent: 0 },
        ],
    },
    {
        id: 5,
        description: "Zadanie 5: Zmiana koloru tekstu w elemencie <p> po wpisaniu tekstu w polu input.",
        blocks: [
            { id: 1, content: "const input = document.querySelector('input');", dataIndent: 0 },
            { id: 2, content: "const pElement = document.querySelector('p');", dataIndent: 0 },
            { id: 3, content: "input.addEventListener('input', () => {", dataIndent: 0 },
            { id: 4, content: "const color = input.value;", dataIndent: 2 },
            { id: 5, content: "pElement.style.color = color;", dataIndent: 2 },
            { id: 6, content: "});", dataIndent: 0 },
        ],
    },
];