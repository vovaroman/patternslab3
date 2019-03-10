class UserRole {
    constructor() {
        this.user = true;
        this.moderator = false;
        this.admin = false;
    }
    updateLevelOfUser() {
        let divStatus = document.getElementById('userStatusEl');
        let pUserRole = document.getElementById('pUserRole');
        try {
            if (this.moderator === false) {
                this.moderator = true;
                divStatus.style.backgroundColor = 'blue';
                pUserRole.innerText = "Moderator";
            }
            else if (this.moderator === true) {
                if (this.admin === false) {
                    this.admin = true;
                    divStatus.style.backgroundColor = 'red';
                    pUserRole.innerText = "Admin";
                }
            }
        }
        catch (_a) { }
    }
    createButtonLevelOfUser() {
        let buttonLevelUser = document.createElement('button');
        buttonLevelUser.id = "buttonLevelUser";
        let that = this;
        buttonLevelUser.onclick = function () { that.updateLevelOfUser(); };
        buttonLevelUser.innerText = "UpdateUserLevel";
        return buttonLevelUser;
    }
    createUserStatusEl() {
        let userDiv = document.createElement('div');
        userDiv.id = "userStatusEl";
        userDiv.style.width = '200px';
        userDiv.style.height = '100px';
        userDiv.style.position = "absolute";
        userDiv.style.left = "45%";
        userDiv.style.transform = "translateX(-50%);";
        let userRole = document.createElement('p');
        userRole.id = "pUserRole";
        userRole.style.textAlign = "center";
        userRole.style.fontSize = "16";
        if (this.moderator) {
            userRole.innerText = "Moderator";
            userDiv.style.backgroundColor = 'blue';
        }
        if (this.admin) {
            userRole.innerText = "Admin";
            userDiv.style.backgroundColor = 'red';
        }
        else {
            userRole.innerText = "User";
            userDiv.style.backgroundColor = 'gray';
        }
        userDiv.appendChild(userRole);
        return userDiv;
    }
}
export default UserRole;
