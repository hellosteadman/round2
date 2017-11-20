(
    function() {
        var parseHTML = function(str) {
            var tmp = document.implementation.createHTMLDocument();

            tmp.body.innerHTML = str;
            return tmp.body.children;
        };

        var ready = function() {
            var template = document.querySelector('script[data-template="todo"]');
            var placeholder = document.querySelector('[data-foreach="todo"]');
            var clone = parseHTML(template.innerText);

            while(clone.length > 0) {
                placeholder.appendChild(clone[0]);
            }
        };

        if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
            ready();
        } else {
            document.addEventListener('DOMContentLoaded', ready);
        }
    }
)();
