var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import UserRole from './UserRole';
class Program {
    main() {
        return __awaiter(this, void 0, void 0, function* () {
            window.onload = function () {
                return __awaiter(this, void 0, void 0, function* () {
                    let main = document.getElementById('main');
                    let roles = new UserRole();
                    main.appendChild(roles.createUserStatusEl());
                    main.appendChild(roles.createButtonLevelOfUser());
                });
            };
        });
    }
}
let prog = new Program();
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield prog.main();
    });
})();
