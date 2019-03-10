(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _UserRole = _interopRequireDefault(require("./UserRole"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

class Program {
  main() {
    return __awaiter(this, void 0, void 0, function* () {
      window.onload = function () {
        return __awaiter(this, void 0, void 0, function* () {
          let main = document.getElementById('main');
          let roles = new _UserRole.default();
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

},{"./UserRole":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
      } else if (this.moderator === true) {
        if (this.admin === false) {
          this.admin = true;
          divStatus.style.backgroundColor = 'red';
          pUserRole.innerText = "Admin";
        }
      }
    } catch (_a) {}
  }

  createButtonLevelOfUser() {
    let buttonLevelUser = document.createElement('button');
    buttonLevelUser.id = "buttonLevelUser";
    let that = this;

    buttonLevelUser.onclick = function () {
      that.updateLevelOfUser();
    };

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
    } else {
      userRole.innerText = "User";
      userDiv.style.backgroundColor = 'gray';
    }

    userDiv.appendChild(userRole);
    return userDiv;
  }

}

var _default = UserRole;
exports.default = _default;

},{}]},{},[1]);
