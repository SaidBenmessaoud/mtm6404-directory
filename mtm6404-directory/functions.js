// functions.js

// 1. list() function - Creates an HTML string listing all clients
function list(clients) {
    return clients.map((client, index) => {
        return `
            <li class="list-group-item d-flex justify-content-between" data-index="${index}">
                ${client.name} <strong>${client.balance}</strong>
            </li>
        `;
    }).join('');
}

// 2. order() function - Sorts clients by a given property
function order(clients, property) {
    return clients.slice().sort((a, b) => {
        if (a[property] < b[property]) {
            return -1;
        } else if (a[property] > b[property]) {
            return 1;
        } else {
            return 0;
        }
    });
}

// 3. total() function - Calculates the total balance of all clients
function total(clients) {
    return clients.reduce((sum, client) => {
        return sum + client.balance;
    }, 0);
}

// 4. info() function - Finds the client by index and returns its details
function info(clients, index) {
    return clients.find((client, i) => {
        return i === index;
    });
}

// 5. search() function - Filters clients by a search query in their name
function search(query) {
    if (!query || typeof query !== 'string' || query.trim() === '') {
        return [];
    }
    query = query.toLowerCase().trim();
    return clients.filter(client => {
        return client.name.toLowerCase().includes(query);
    });
}
