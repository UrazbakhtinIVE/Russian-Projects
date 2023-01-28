document.addEventListener('DOMContentLoaded', function() {
    const sidenav = document.querySelectorAll('.sidenav');
    const menuInstances = M.Sidenav.init(sidenav);
    const modal = document.querySelectorAll('.modal');
    const modalInstances = M.Modal.init(modal);
    const gallyry = document.querySelectorAll('.materialboxed');
    const  gallyryInstances = M.Materialbox.init(gallyry);
});

