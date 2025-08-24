document.addEventListener('DOMContentLoaded', () => {

    const backgroundMusic = document.getElementById('background-music');
    let musicStarted = false;

    // Browsers require user interaction to play audio. This starts music on the first click.
    document.body.addEventListener('click', () => {
        if (!musicStarted) {
            backgroundMusic.play().catch(error => console.log("Audio play failed: ", error));
            musicStarted = true;
        }
    });

    // --- Edit Functionality ---
    const editButton = document.getElementById('edit-button');
    const editModal = document.getElementById('edit-modal');
    const closeModal = document.querySelector('.close-button');
    const saveButton = document.getElementById('save-button');

    const nameInput = document.getElementById('name-input');
    const fontSelect = document.getElementById('font-select');
    const glowSelect = document.getElementById('glow-select');
    const profileName = document.getElementById('profile-name');

    // Reveal the edit button when user types "edit"
    let keySequence = '';
    const targetSequence = 'edit';
    window.addEventListener('keydown', (e) => {
        keySequence += e.key.toLowerCase();
        if (keySequence.length > targetSequence.length) {
            keySequence = keySequence.slice(1);
        }
        if (keySequence === targetSequence) {
            editButton.style.display = 'block';
            keySequence = ''; // Reset sequence
        }
    });

    // Show the modal when edit button is clicked
    editButton.addEventListener('click', () => {
        nameInput.value = profileName.textContent;
        editModal.style.display = 'block';
    });

    // Hide the modal
    closeModal.addEventListener('click', () => {
        editModal.style.display = 'none';
    });
    
    window.addEventListener('click', (event) => {
        if (event.target == editModal) {
            editModal.style.display = "none";
        }
    });

    // Save changes from the modal
    saveButton.addEventListener('click', () => {
        // Update profile name
        if (nameInput.value) {
            profileName.textContent = nameInput.value;
        }

        // Update font and glow classes
        profileName.className = ''; // Clear existing classes
        profileName.classList.add(fontSelect.value);
        profileName.classList.add(glowSelect.value);

        // Hide the modal
        editModal.style.display = 'none';
    });

});