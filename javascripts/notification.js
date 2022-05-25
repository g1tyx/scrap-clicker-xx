let timesNotified = 0

let notifier = {
    remove : function(id, duration) {
        duration = Math.max(duration, 3)
        setTimeout(() => {
            document.getElementById(id).className = "notification notification-disappears"
            
        }, duration * 1000);
        setTimeout(() => {
            document.getElementById(id).remove()
        }, (duration * 1000) + 330);
    },
    success : function(text, id = "none", duration = 3) {
        
        timesNotified++
        let tag = document.createElement("div");
        let brTag = document.createElement("br")
        let newlineid = "newline" + timesNotified
        let notifiertext = document.createTextNode(text);

        tag.setAttribute("id", id + timesNotified)
        //brTag.setAttribute("id", newlineid)
        
        tag.appendChild(notifiertext);

        let element = document.getElementById("notifier-box");
        element.appendChild(tag);
        //element.appendChild(brTag)
        document.getElementById(id + timesNotified).className = "notification notification-appears"
        notifier.remove(id + timesNotified, duration)
        //notifier.remove(newlineid, duration)
    }
}