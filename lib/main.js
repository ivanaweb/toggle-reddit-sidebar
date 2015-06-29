require("sdk/ui/button/action").ActionButton({
    id: "toggle_reddit_sidebar",
    label: "Toggle Reddit Sidebar",
    icon: {
        "16": "./icon-16.png",
        "32": "./icon-32.png",
        "64": "./icon-64.png"
    },
    onClick: function() {
        require("sdk/tabs").activeTab.attach({
            contentScript:
                "var get_elems = document.getElementsByClassName('side');" +
                "sidebar = get_elems[0];" +
                // if the sidebar is hidden
                "if ( sidebar.offsetWidth === 0 && sidebar.offsetHeight === 0 ) {" +
                    "sidebar.style.display = \"block\";" +
                "} else {" +
                    "sidebar.style.display = \"none\";" +
                "}"
        });
    }
});