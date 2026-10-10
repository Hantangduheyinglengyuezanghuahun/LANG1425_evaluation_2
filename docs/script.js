document.querySelectorAll('[data-dialog]').forEach((button) => {
  button.addEventListener('click', () => document.getElementById(button.dataset.dialog).showModal());
});

document.querySelectorAll('.story-dialog').forEach((dialog) => {
  dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
});
