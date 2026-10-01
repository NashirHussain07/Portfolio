document.addEventListener("DOMContentLoaded", function () {

    const name = document.getElementById("typing-name");
    const role = document.getElementById("typing-role");

    const nameText = "Nashir Hussain";
    const roleText = "Software Engineer • Developer • Software Tester";

    let i = 0;
    let j = 0;

    function typeName() {

        if (i < nameText.length) {

            name.textContent += nameText.charAt(i);

            i++;

            setTimeout(typeName, 100);

        } else {

            setTimeout(typeRole, 400);

        }
    }

    function typeRole() {

        if (j < roleText.length) {

            role.textContent += roleText.charAt(j);

            j++;

            setTimeout(typeRole, 60);

        }

    }

    typeName();

});