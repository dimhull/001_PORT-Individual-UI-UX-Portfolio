// Login functionality
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    if (username) {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('app').classList.remove('hidden');
        document.getElementById('user-name').textContent = username;
        document.getElementById('user-name1').textContent = username;
    }
});

// Profile button
document.getElementById('profile-btn').addEventListener('click', function() {
    document.getElementById('profile-page').classList.remove('hidden');
});

// Map button
document.getElementById('map-btn').addEventListener('click', function() {
    document.getElementById('room-map').style.display = 'flex';
});

// Show item detail
function showItemDetail(item) {
    document.getElementById('item-title').textContent = item;
    document.getElementById('item-detail').classList.remove('hidden');
    
    // Update power usage based on item
    const powerUsage = {
        'Lamps': '9 Mw',
        'AC': '13 Mw',
        'Fridge': '9 Mw',
        'Washing Machine': '9 Mw'
    };
    document.getElementById('power-usage').textContent = powerUsage[item];
}

// Hide item detail
function hideItemDetail() {
    document.getElementById('item-detail').classList.add('hidden');
}

// Hide profile
function hideProfile() {
    document.getElementById('profile-page').classList.add('hidden');
}

// Hide map
function hideMap() {
    document.getElementById('room-map').style.display = 'none';
}