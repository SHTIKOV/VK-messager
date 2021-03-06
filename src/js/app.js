Vue.use(Lightbox);

var app = new Vue({
    el: '#triangle',
    data: {
        message: 'Привет, '+getCookie('username'),
        vk: vk,
        username: getCookie('username'),
        chechAccess: false,
        friendsArr: [{}],
        totalFriends: 0,
        perPage: 12,
        offsetFriends: 0,
        currentPage: 1,
    },
    methods: {
        accessApp: function () {
            vk.access (this);
            vk.sendMsg ('this is test');
            this.getFriends (this);
        },
        authApp: function () {

        },
        login: function () {
            vk.login (this);
        },
        logout: function () {
            vk.logout (this);
            this.friendsArr = [{}];
            this.perPage = 12;
            this.username = "Вы не авторизованы";
            deleteCookie('username');
        },
        getFriends: function () {
            vk.getFriends (this);
        },
        sendMsg : function () {
            /*sendRequest ('messages.send', {message: this.message}, function () {
                console.log('adsadasdasdasd');
            });*/
            //vk.sendMsg (this.message);
            this.message = "Новое тестовое сообщение";
        },
    }
});
