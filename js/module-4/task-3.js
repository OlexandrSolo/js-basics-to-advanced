const profile = {
    username: "Jacob",
    playTime: 300,

    changeUsername(newName) {
        if (typeof newName === "string" || newName.length >= 4) {
            this.username = newName;
        }
        return "This name is incorrect"
    },

    updatePlayTime(hours) {
        if (typeof hours === "number" || hours >= 0) {
            this.playTime += hours
        }
    },

    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`
    }
};


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"