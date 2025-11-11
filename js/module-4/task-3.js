const profile = {
    username: "Jacob",
    playTime: 300,

    changeUserName(newName) {
        if (typeof newName === "string" || newName.length >= 4) {
            this.username = newName;
        }
        return "This name is incorrect"
    }

    udatePlayTime(hours) {
        if (typeof hours === "number" || hours >= 0) {
            this.playTime = hours
        }
    }
};