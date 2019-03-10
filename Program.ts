import IProgram from './IProgram';
import UserRole from './UserRole';
class Program implements IProgram{
    async main(){
        window.onload = async function () {
            let main:HTMLElement = document.getElementById('main');
            let roles:UserRole = new UserRole();
            main.appendChild(roles.createUserStatusEl());
            main.appendChild(roles.createButtonLevelOfUser());

            

            }
        }
}

let prog:Program = new Program();
(async function(){
    await prog.main();
})();
