// Event listener for the popup closure

document.addEventListener('onPopupClose', function(e) {
    console.log('Creativa Popup closed ID: ' + e.detail);
});

function popup() {
    CreativaPopup.create('feel free to dm me <font class="contactding" onclick="copyuser();" color="#FFFFFF">@soacy</font> &#10084<br> <font style="color: #c9c9c9; font-size: smaller;"> or join my discord server <a href="https://discord.gg/3FQTFrHejq" style="color: #FFFFFF;">https://discord.gg/3FQTFrHejq</a> </font>', 'Discord', '', {
        titleColor: '#FFFFFF',
        textColor: '#c9c9c9'
    });

}

function copyuser() {
    navigator.clipboard.writeText("soacy");
    setTimeout(function() {
        alert("Discord username copied to clipboard!");
    }, 50);
}